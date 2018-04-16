var slidenumber = 1;
showSlideshow(slidenumber);

// Next/previous control panel
function plusSlideshow(i) {
  showSlides(slideIndex += i);
}

// image control panel
function presentSlide(i) {
  showSlideshow(slidenumber = i);
}

function showSlides(i) {
  var n;
  var slide = document.getElementsByClassName("Slideshow_fade");
  var dot = document.getElementsByClassName("circle");
  if (i > slide.length) {slidenumber = 1} 
  if (i < 1) {slidenumber = slide.length}
  for (n = 0; n < slide.length; n++) {
      slide[n].style.display = "none"; 
  }
  for (n = 0; n < dot.length; n++) 
  {
      dot[n].className = dot[n].className.replace(" activated", "");
  }
  slide[slidenumber-1].style.display = "blocked"; 
  dots[slidenumber-1].className += " activated";
}
