jQuery(document).ready(function($){
	console.log('sweet honey');

    var tooManyCooks = function(){
        function createCookie(name,value,days) {
            if ( days ) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else {
               var expires = "";
            }
            document.cookie = name+"="+value+expires+"; path=/";
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while ( c.charAt(0) == " " ) c = c.substring(1,c.length);
                if ( c.indexOf(nameEQ) == 0 ) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }

        createCookie("help-visited", true, 1);

        var checkCooks = readCookie("help-visited");
        console.log("Help Visted = " + checkCooks);
    };

    var currentLocation = window.location.href;
    
    if ( currentLocation.indexOf("help.anaplan") !== -1 ) {
	    console.log('Too Many Cooks');
	    tooManyCooks();
    }

	var autoPopulateInit = function ( form ) {
		/*
		Auto-populate
		*/

		var tc = '_mkto_trk';
		var tcValue = getCookie(tc);
		console.log("_mkto_trk value: "+tcValue);
			// Add the fields name here which need to be prefilled
		var fields="firstName,lastName,email,title,phone,company";
		if ( tcValue!=null ) {
			var mktoLead=null;
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				 	if ( this.readyState == 4 && this.status == 200 ) {
					console.log('Response: '+this.responseText);
					var resultText=this.responseText;
					var startIndex=resultText.indexOf('{');
					mktoLead=resultText.substring( (startIndex-1), resultText.length).trim();
					mktoLead=mktoLead.replaceAll('&quot;', '"');

					mktoLead=JSON.parse(mktoLead);
				 
				  		if (mktoLead!=null) {
						console.log("form is ready.......");
						var mktoLeadFields = mktoLead.result[0];
						// Add fields name as required				 
						var prefillFields = {
							"Email" : mktoLeadFields.email,
							"FirstName" : mktoLeadFields.firstName,
							"LastName" : mktoLeadFields.lastName,
							"Company" : mktoLeadFields.company,
							"Title" : mktoLeadFields.title,
							"Phone" : mktoLeadFields.phone
						};
						form.vals(prefillFields);
					}
				 	}
				};
			var url = "https://www.anaplan.com/mktocon.php?filterType=cookie&filterValues=" + encodeURIComponent(tcValue) + "&fields=" + fields;
			xhttp.open("GET", url, true);
			xhttp.send();
		} /* End auto-populate */
	};

	if ( typeof MktoForms2 !== 'undefined' && $('#requestID').length > 0 ) {
		MktoForms2.whenReady(function (form) {
			var requestID = document.getElementById('requestID');
			if ( requestID !== null ) {
				requestID.addEventListener('keyup', function (e){
				 	form.submittable(false);
				});
			}

			//autoPopulateInit(form);

			form.onSubmit(function(){
				if ( requestID.value !== 'a') {
				 	form.submittable(false);
				} else {
					console.log('submit');
				}
			});

		});
		function getCookie(cookieName) {
			var name = cookieName.toLowerCase() + '=';
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while ( c.charAt(0) == ' ' ) {
					c = c.substring(1);
				}
				if ( c.indexOf(name) == 0 ) {
					return c.substring(name.length,c.length);
				}
			}
			return null;
		}
		String.prototype.replaceAll = function(searchStr, replaceStr) {
			var str = this;
			if ( str.indexOf(searchStr) === -1 ) {
				return str;
			}
			return ( str.replace(searchStr, replaceStr) ).replaceAll(searchStr, replaceStr);
		}
	} else if ( typeof MktoForms2 !== 'undefined' ) {
		MktoForms2.whenReady(function (form) {
			//autoPopulateInit(form);
		});
		function getCookie(cookieName) {
			var name = cookieName.toLowerCase() + '=';
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while ( c.charAt(0) == ' ' ) {
					c = c.substring(1);
				}
				if ( c.indexOf(name) == 0 ) {
					return c.substring(name.length,c.length);
				}
			}
			return null;
		}
		String.prototype.replaceAll = function(searchStr, replaceStr) {
			var str = this;
			if ( str.indexOf(searchStr) === -1 ) {
				return str;
			}
			return ( str.replace(searchStr, replaceStr) ).replaceAll(searchStr, replaceStr);
		}
	}
});