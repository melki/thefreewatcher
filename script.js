
	var page = document.location.href;
	var site = page.split('.');
	var creation=0;	
	



	if (site[1]=='youtube' && creation == 0 ) 
	{
		var watch = site[2].split('?');
		if(watch[0]=='com/watch')
		{
			chrome.storage.local.set({'link': page});	
			creation=1;
		
			window.location.href = 'http://youtube-free.fr';
		}

	}
	if (site[1]=='youtube-free' ) 
	{	
		chrome.storage.local.get('link', function(data) {
 		document.getElementById('input').value = data.link;
		document.getElementsByClassName('form')[0].submit();
   	     });

		

 	}
