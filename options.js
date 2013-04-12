// Not online yet, still lot of issues...
function changer()
	{
		if (localStorage['etat']=='on') 
			{
				localStorage['etat']='off';
				chrome.browserAction.setIcon({path:"icon128F.png"});
				chrome.contentScripts=' ';
				put();
				return; 
			}
		if (localStorage['etat']=='off') 
			{
				localStorage['etat']='on';
				chrome.browserAction.setIcon({path:"icon128T.png"});
				put();
				return; 
			}

	}

function put()
  		{
  			var p = window.document.getElementById('etat');
  			p.innerHTML='L \'application est en mode : '+localStorage['etat']+' ! ';
  			
  		}
var button = window.document.getElementById('button');

button.addEventListener("click", changer, false); 
 
put();