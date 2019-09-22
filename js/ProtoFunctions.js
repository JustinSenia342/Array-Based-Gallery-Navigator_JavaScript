	var arrayCount = 0;
	
	//img URL array
	var imageURL = [
		"http://farm2.staticflickr.com/1427/584157862_e67cac8eea.jpg",
		"http://www.flossiesgifts.com/v/vspfiles/photos/DMD-STK644741-doctor-who-12.jpg",
		"https://s-media-cache-ak0.pinimg.com/236x/7d/1b/f6/7d1bf6f0b83823fdc0487b32021353a7.jpg",
		"http://static.parade.com/wp-content/uploads/2014/03/Why-Do-Stars-All-Look-Almost-the-Same-Size-ftr.jpg",
		"http://www.elcinedeloqueyotediga.net/wp-content/uploads/2009/07/ElcineenlasestrellasLunaViajealaLuna1.png",
		"http://static.tvtropes.org/pmwiki/pub/images/King-Arthur-and-Patsy-monty-python-380178_800_441_4926.jpg",
		"https://i.pinimg.com/originals/6b/ce/34/6bce346f9fdc983e9887bbb27099bc67.jpg"
	];
	
	//img ALT array
	var imageAlt = [
		"Picture of god",
		"Picture of angels",
		"Picture of demons",
		"Picture of stars",
		"Picture of the moon",
		"Picture of Kings",
		"Picture of Princes"
	];
	
	//Title Array
	var imageTitle = [
		"God",
		"Angels",
		"Demons",
		"Stars",
		"the Moon",
		"Kings",
		"Princes"
	];
	
	//imagetext array
	var imageText = [
		"If there's one thing he can't stand, it's groveling",
		"Don't blink...",
		"Skewing the data on how many spiders someone eats in one's sleep since the dark ages",
		"Never has a probably long since dead flaming ball of gas looked so pretty",
		"Shouldn't have got that red ryder BB gun for christmas",
		"Claims to be the king after some watery tart threw a sword at him",
		"Doesn't like terrible news, so tell it to him in a good way"
	]
	
	//function that forward one picture when the forward button is pressed, updates
	//images, thumbnails, description and title
	function forwardOnePic() {
	
		//associates variables with proper id's
		var id = document.getElementById("MainPic");
		var title = document.getElementById("titletext");
		var descr = document.getElementById("descriptiontext");
		var prev = document.getElementById("al" + arrayCount);
		
	
		//increments array number variable
		arrayCount = arrayCount+1;
	
		//if array count is over limit, loop back to first elements
		if(arrayCount == 7)
		{
			arrayCount = 0;
		}
	
		//initializing variable to modify next element
		var next = document.getElementById("al" + arrayCount);
		
		//updates big image, image alt, title and description
		id.src = imageURL[arrayCount];
		id.alt = imageAlt[arrayCount];
		title.placeholder = imageTitle[arrayCount];
		descr.placeholder = imageText[arrayCount];
	
		//array updates opacity of thumbnail images
		next.style.opacity = "1";
		prev.style.opacity = "0.2";

	}
	
	//function that goes backwards one picture when the back button is pressed, updates
	//images, thumbnails, description and title
	function backOnePic() {
		var id = document.getElementById("MainPic");
		var title = document.getElementById("titletext");
		var descr = document.getElementById("descriptiontext");
		var prev = document.getElementById("al" + arrayCount);
	
		//decrements array number variable
		arrayCount = arrayCount-1;
	
		//if array count is over limit, loop back to first elements
		if(arrayCount == -1)
		{
			arrayCount = 6;
		}
		
		//initializing variable to modify next element
		var next = document.getElementById("al" + arrayCount);
	
		//updates big image, image alt, title and description
		id.src = imageURL[arrayCount];
		id.alt = imageAlt[arrayCount];
		title.placeholder = imageTitle[arrayCount];
		descr.placeholder = imageText[arrayCount];
	
		//array updates opacity of thumbnail images
		next.style.opacity = "1";
		prev.style.opacity = "0.2";

	}