(function(){
//If you want to include more images, add the link name and URL of the image in the array list below.
	let images_list = [
                {"url":"CFSR/Flyer-Workshop on Climate Change1.png","name":"","link":""},
                {"url":"IEEE/events_22.jpg","name":"","link":"IEEE/IEEE DAY 2022 EVENTS.jpg"},
                {"url":"EEE/GVCON_Homev4_2_files/gvconad_design3_JPEG.jpg","name":"","link":"EEE/GVCON_Homev4_2.htm"},  
                {"url":"EEE/Workshops/IEEE SB Event Poster.jpg","name":"98929_U48QIHMS3.jpg","link":""},
                {"url":"upcoming/EEE.jpg","name":"98929_U48QIHMS3.jpg","link":"upcoming/EICT_AI&ICT_APPL_PSP_GVPCE.pdf"},
                {"url":"data1/upcoming/Medical Image Analysis Using AI.png","name":"98929_U48QIHMS3.jpg","link":"upcoming/Final_MIAAI_Workshop.pdf"},
		 {"url":"data1/upcoming/LIASSeminar.jpg","name":"liassem","link":"upcoming/16 mar 2022.pdf"}, 
                 {"url":"data1/upcoming/image.png","name":"chem","link":"upcoming/AICTE-ISTE Brochure-Final.pdf"},
                  {"url":"data1/upcoming/RAMSA.jpg","name":"ramse","link":"http://gvpce.ac.in/ramsa2021.html"},
		];

	let slider_id = document.querySelector("#hcg-slider-2");
        let prev_button = slider_id.querySelector(".hcg-slide-prev");
	let next_button = slider_id.querySelector(".hcg-slide-next");

	// append all images
	let dots_div = "";
	let images_div = "";
	for (let i = 0; i < images_list.length; i++) {
		// if no link without href="" tag
		let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
		images_div += '<a target=_blank'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:block"':'')+'>'+
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

