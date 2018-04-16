var slide_number = 0; 
 function slidechange()
{  
       	var i;
    var slides = document.getElementsByClassName("sliding");
    var circle = document.getElementsByClassName("circles");
    for (i = 0; i < slides.length; i++) 
    {
       slides[i].style.display = "none";  
    }
    slide_number++;
    if (slide_number > slides.length) {slide_number = 1}    
    for (i = 0; i < circle.length; i++) 
    {
        circle[i].className = circle[i].className.replace(" activated", "");
    }
    slides[slide_number-1].style.display = "block";  
    circle[slide_number-1].className += " activated";
    setTimeout(slidechange, 2500); // Change image every 2 and a half seconds
}
	

