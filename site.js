//JS for Chris Reiner's personal resume site
//April 8, 2021

$(document).ready(function(){

	//Email Me Index Page Click Event Handler
	$('#emailMe').click(function(e){
		var email = "cjreiner@yahoo.com";
		var subject = "Hi Chris!";
		window.location = 'mailto:' + email + '?subject=' + subject;
	}); //end click

	//404 error page back button
	$('#customBack').click(function(e){
		window.history.back();
	}); //end click

	//resume download
	$('#resumeBtn').click(function(e){
		location = "ChrisReinerResume.pdf";
	}); //end click

	//resume download
	$('#resumeBtn2').click(function(e){
		location = "ChrisReinerResume.pdf";
	}); //end click


	//Analytics Events	
	$('#emailMe').click(function(e){
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event' : 'customEvent',
			'category' : 'click',
			'action' : 'email',
			'label' : 'email me'
		});
	}); //end click

	$('#resumeBtn').click(function(e){
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event' : 'customEvent',
			'category' : 'click',
			'action' : 'download',
			'label' : 'resume'
		});
	}); //end click

	$('#resumeBtn2').click(function(e){
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event' : 'customEvent',
			'category' : 'click',
			'action' : 'download',
			'label' : 'resume2'
		});
	}); //end click
	//End Analytics Events

}); // end ready