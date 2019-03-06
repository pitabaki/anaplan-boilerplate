# Anaplan Boilerplate

## Folder structure

* prod
  * scss
    * vendors
    * partials
    * modules
  * js
  * function.php (include for routing and headers)
  * .css (required for any child theme)
* dist
  * css
  * js

### Getting Started
To get started, you'll need to install Node and NPM.

Once NPM and Node are installed, run "npm install". This'll install any dependencies. After the dependencies have been installed, run "npm start" to initialize the watch state.

### Prod
All of your production files should go here. File structure can be altered however you see fit. Keep in mind, whatever changes that are made within this folder will need to be mirrored in the "gulpfile.js" file.

Some exceptions apply. For instance, when new scripts are added to /prod/js/, gulp will automatically add that to its "scripts" process task.

### Dist
This folder is largely automated. Essentially, this should mirror your theme or plugin as closely as possible. Ideally, this will be the folder you'll upload to your server. So, all php, js, and css files you want should be included here.