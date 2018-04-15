var slidenumber = 0;
showSlideshow();

function showSlideshow() 
{
    var i;
    var slide = document.getElementsByClassName("Slideshow_fade");
    for (i = 0; i < slide.length; i++) 
	{
        slides[i].style.display = "none"; 
    }
    slidenumber++;
    if (slidenumber > slide.length) {slidenumber = 1} 
    slide[slidenumber-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image after three seconds
}
