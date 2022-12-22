document.getElementById("sub").onmouseover = function () 
{
    document.getElementById("subnav").style.display = 'block';
};
document.getElementById("sub").onmouseout = function () 
{
    document.getElementById("subnav").style.display = 'none';
};
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  
}
document.getElementById("hidden").onclick = function () 
{
    document.getElementById("logo").style.display = 'none';
    document.getElementById("sub-nav-items").style.display = 'block';
    document.getElementById("hidden").style.display = 'none';
};