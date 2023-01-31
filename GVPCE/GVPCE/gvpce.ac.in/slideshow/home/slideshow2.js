(function(){
//If you want to include more images, add the link name and URL of the image in the array list below.
	let images_list = [
                {"url":"data1/images/SILVER JUBILEE BANNER 25 years (1).jpg","name":"98929_U48QIHMS3.jpg","link":""},
                {"url":"data1/images/agnipath.png","name":"agnipath","link":""},
		{"url":"data1/images/21-22placements/pl1.jpeg","name":"98929_U48QIHMS3.jpg","link":""},
		{"url":"data1/images/21-22placements/pl2.jpeg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/21-22placements/pl4.jpg","name":"98929_U48QIHMS3.jpg","link":""},
		{"url":"data1/images/21-22placements/pl5.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/2.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/3.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/4.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/5.jpg","name":"25234_5GVN646G4.jpg","link":""},
		{"url":"data1/images/20-21placements/6.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/7.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/8.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/9.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/10.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/11.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/12.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/13.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/14.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"data1/images/20-21placements/15.jpg","name":"25234_5GVN646G4.jpg","link":""},  
                {"url":"data1/images/20-21placements/16.jpg","name":"25234_5GVN646G4.jpg","link":""},  
                {"url":"data1/images/20-21placements/17.jpg","name":"25234_5GVN646G4.jpg","link":""},  
                {"url":"data1/images/20-21placements/18.jpg","name":"25234_5GVN646G4.jpg","link":""},  
                {"url":"data1/images/20-21placements/19.jpg","name":"25234_5GVN646G4.jpg","link":""},  
                {"url":"data1/images/20-21placements/20.jpg","name":"25234_5GVN646G4.jpg","link":""}, 
                {"url":"data1/images/20-21placements/21.jpg","name":"25234_5GVN646G4.jpg","link":""},  
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/1_.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/2.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/3.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/4.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/5.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/6.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/7.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/8.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/9.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/10.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/11.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/12.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/13.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/14.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/15.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/16.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/17.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/18.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/19.jpg","name":"25234_5GVN646G4.jpg","link":""},  
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/20.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/21.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/22.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/23.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/24.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/25.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/26.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/27.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/28.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/29.jpg","name":"25234_5GVN646G4.jpg","link":""},
                {"url":"slideshow/home/Homepageslideshowphotos/2.College&Departments/30.jpg","name":"25234_5GVN646G4.jpg","link":""},
	];

	let slider_id = document.querySelector("#hcg-slider-1");
        let prev_button = slider_id.querySelector(".hcg-slide-prev");
	let next_button = slider_id.querySelector(".hcg-slide-next");

	// append all images
	let dots_div = "";
	let images_div = "";
	for (let i = 0; i < images_list.length; i++) {
		// if no link without href="" tag
		let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
		images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:block"':'')+'>'+
						'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
					 '</a>';
	}
	slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
	let slide_index = 0;

	let images = slider_id.querySelectorAll(".hcg-slides");
	function showSlides() {
		if (slide_index > images.length-1) {
			slide_index = 0;
		}
		if (slide_index < 0) {
			slide_index = images.length-1;
		}
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = "none";
			if (i == slide_index) {
				images[i].style.display = "block";
			}
		}
	}

	setInterval(function(){
		slide_index++;
		showSlides();
	}, 5000);

    prev_button.addEventListener("click", function(event) {
		event.preventDefault();
		slide_index--;
		showSlides();
	}, false);

	next_button.addEventListener("click", function(event){
		event.preventDefault();
		slide_index++;
		showSlides();
	}, false);


})();

