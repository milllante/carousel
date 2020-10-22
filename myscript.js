/* Панель навигации */
function openCity(e, city) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].classList.remove("active");
    }
    document.getElementById(city).style.display = "block";
    e.currentTarget.classList.add("active");
} 


/* Москва - слайд */
var slideIndex = 1;

/*мобильный*/
var initialPoint, finalPoint;
document.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    initialPoint = event.changedTouches[0];
}, false);
document.addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    if (xAbs > 20) {
        if (finalPoint.pageX < initialPoint.pageX) {
            showSlides(slideIndex += 1);
        } else {
            showSlides(slideIndex -= 1);
        }
    }
});




function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    var indicator = document.getElementsByClassName("indicator");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < indicator.length; i++) {
        indicator[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "block";
    indicator[slideIndex-1].classList.add("active");
}

/* Санкт-Петербург - слайд */

var IndexS = 1;

function plusSlidesS(n) {
    showSlidesS(IndexS+=n);
}

function currentSlideS(n) {
    showSlidesS(IndexS = n);
}

function showSlidesS(n) {
    var i;
    var slides = document.getElementsByClassName("mySlideS");
    var demo = document.getElementsByClassName("demo");
    if (n > slides.length) {IndexS = 1;}
    if (n < 1) {IndexS = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < demo.length; i++) {
        demo[i].classList.remove("activeS");
    }
    slides[IndexS-1].style.display = "block";
    demo[IndexS-1].classList.add("activeS");
    
}