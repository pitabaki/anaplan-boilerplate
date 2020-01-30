if ( !pageReserved.isCurrentPageSearchPage() && typeof coveoSearchKey == 'undefined' ) {
    //To do: Find coveoSearchKey for all the domains - It is missing now
    var CoveoRequest = $.ajax({
        url: "https://platform.cloud.coveo.com/rest/search/token",
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', 'Bearer xxa78b6ab2-0045-43d3-aad3-f6c224793e51');
        },
        method: "POST",
        data: JSON.stringify({
            "filter": "NOT(@source =='Anaplan+Help+Portal')",
            "pipline": "AnaplanWebsiteWeight",
            "userIds": [{
                "name": "coveo-crawler",
                "provider": "Email Security Provider",
                "type" : "User"
            }]
        }),
        dataType: "JSON"
    });
    CoveoRequest.done(function(data) {
        if (data && data.token) {
            if (!coveoSearchKey) {
                var coveoSearchKey = data.token;
            }
            if (typeof Coveo != 'undefined' && Coveo  && Coveo.SearchEndpoint && Coveo.initSearchbox && coveoSearchKey) {
                Coveo.SearchEndpoint.configureCloudV2Endpoint("", coveoSearchKey);
                // Initialize the framework by targeting the root in the interface.
                var CoveoRoot = Coveo.$$(document).find("#unifiedSearchBar");
                //To do: Find out All the coveo search results send to Community page.
                Coveo.initSearchbox(CoveoRoot, "https://community.anaplan.com/t5/custom/page/page-id/UnifiedSearch");
            } else {
                console && console.log('Global UHF: There is no Coveo');
            }
        } else {
            console.log('Coveo search API: There is no data');
        }
    });

    CoveoRequest.fail(function(jqXHR, textStatus) {
        console.log("CoveoRequest failed: " + textStatus);
    });
};