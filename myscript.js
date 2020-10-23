

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
    
document.getElementById("mob").addEventListener('touchstart', start, false);
document.getElementById("mob").addEventListener('touchend', end, false);
var xDown;
function start(evn) {
    xDown = evn.touches[0].clientX;
}
function end(evn) {
    if(! xDown) {
        return;
    }
    var xUp = evn.changedTouches[0].clientX;
    
    var xDiff = xDown - xUp;
    if (xDiff > 0) {
        showSlides(slideIndex += 1);
    } else {
        showSlides(slideIndex -= 1);
    }
}



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
var slideIndexS = 1;
document.getElementById("mob1").addEventListener('touchstart', startS, false);
document.getElementById("mob1").addEventListener('touchend', endS, false);
var xDownS;

function startS(evn) {
    xDownS = evn.touches[0].clientX;
}
function endS(evn) {
    if(! xDownS) {
        return;
    }
    var xUp = evn.changedTouches[0].clientX;
    var xDiff = xDownS - xUp;
    if (xDiff > 0) {
        showSlidesS(slideIndexS += 1);
    } else {
        showSlidesS(slideIndexS -= 1);
    }
}

function plusSlidesS(n) {
    showSlidesS(slideIndexS+=n);
}

function currentSlideS(n) {
    showSlidesS(slideIndexS = n);
}

function showSlidesS(n) {
    var i;
    var slides = document.getElementsByClassName("mySlideS");
    var demo = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndexS = 1;}
    if (n < 1) {slideIndexS = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < demo.length; i++) {
        demo[i].classList.remove("activeS");
    }
    slides[slideIndexS-1].style.display = "block";
    demo[slideIndexS-1].classList.add("activeS");
    
}