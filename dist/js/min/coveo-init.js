(function(){
	document.addEventListener('DOMContentLoaded', function () {
		var root = document.body;
		//Coveo.SearchEndpoint.configureSampleEndpointV2();
		Coveo.SearchEndpoint.endpoints['default'] = new Coveo.SearchEndpoint({
			restUri: 'https://platform.cloud.coveo.com/rest/search',
			accessToken: 'xxa78b6ab2-0045-43d3-aad3-f6c224793e51',
			queryStringArguments: {
				debug: 1,
				pipeline: "AnaplanWebsiteWeight"
			}
		});
		Coveo.init(root);
	});	
})();
