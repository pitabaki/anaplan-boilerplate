(function(){
	document.addEventListener('DOMContentLoaded', function () {
		var root = document.body;
		//Coveo.SearchEndpoint.configureSampleEndpointV2();
		var currentWindowLocation = window.location.href;
		var accessTokes = 'xxa78b6ab2-0045-43d3-aad3-f6c224793e51';//Production access token
		if ( currentWindowLocation.indexOf("anaplan.staging") !== -1 ) {
		  console.log("Staging environment");
		  var accessTokes = 'xx20ec22e0-c68e-4b96-8b54-b8f8fab567aa';//staging access token
		}
		Coveo.SearchEndpoint.endpoints['default'] = new Coveo.SearchEndpoint({
			restUri: 'https://platform.cloud.coveo.com/rest/search',
			accessToken: accessTokes,
			queryStringArguments: {
				debug: 1,
				//pipeline: "AnaplanWebsiteWeight"
			}
		});
		Coveo.init(root);
	});	
})();
	//accessToken: 'xxa78b6ab2-0045-43d3-aad3-f6c224793e51', //Production access token
			//accessToken: 'xx20ec22e0-c68e-4b96-8b54-b8f8fab567aa',
