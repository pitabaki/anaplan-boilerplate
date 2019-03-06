const fs = require("fs"),
    path = require("path"),
    watch = require("node-watch"),
    { exec } = require('child_process'),
    htmlMarkup = require("./node_modules/anaplan/htmlMarkup");

let importScripts = path.join(__dirname, "./dist/js/anaplan-astra-customize-footer-hook-min.js"),
    printPath = path.join(__dirname, "./dist/");

let watchPath = path.join(__dirname, "/prod/");

let executeWhenChangesMade = () => {
    exec("gulp god", (err, stdout, stderr) => {
        if ( err ) {
            console.error(err);
            return;
        }
        console.log(stdout);
        fs.readFile(importScripts, "utf-8", (err, content) => {
            if ( err ) {
                console.log(err);
            }
            let newMarkup = htmlMarkup(content);
            fs.writeFile(printPath + "script.html", newMarkup, (err) => {
                if ( err ) {
                    console.log(err);
                }
                console.log( printPath + "script.html has been written. Open that html file and copy its contents, then paste them into WP customizer.");
            });
        });
    });
};


console.log("Watching for changes at " + watchPath);
//console.log("Watching for changes at " + watchPath);

watch( watchPath, { recursive: true }, (evt, name) => {
    console.log('%s changed.', name);
    executeWhenChangesMade();
});

