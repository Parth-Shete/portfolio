$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobilenav = document.querySelector('.mobile-nav');

hamberger.addEventListener('clicks', function(){
    mobileNav.classList.add('open');
});

times.addEventListener('clicks', function(){
    mobileNav.classList.remove('open');
});

});