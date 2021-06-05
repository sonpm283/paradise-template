// hamburger menu 
var menuBtn = document.querySelector('.hamburger-menu');
var menuMb = document.querySelector('.nav-mb');
var overlay = document.querySelector('.nav-overlay');

overlay.onclick = () => {
    menuMb.classList.toggle('active');
}

menuBtn.onclick = () => {
    menuMb.classList.toggle('active');
}

// scroll fixed nav 
var navTop = document.querySelector('.header-top');
var navMenu = document.querySelector('.header-main');
window.onscroll = function () {
    if (document.body.scrollTop > navTop.offsetHeight || document.documentElement.scrollTop > navTop.offsetHeight) {
        navMenu.classList.add('nav-fixed');
    } else {
        navMenu.classList.remove('nav-fixed');
    }
}

// owl
var navText = ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>" ];
$("#hero-carousel").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    autoplay: true,
    navText: navText,
    autoplayHoverPause: true
})

$("#service-slide").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    autoplay: true,
    navText: navText,
    autoplayHoverPause: true,
    margin: 30,
    responsive : {
        320: {
            items: 1,
        },
        500: {
            items: 2,
        },
        1024: {
            items: 3
        },
        1280: {
            items: 4
        },
        1600: {
            items: 4
        }
    }
})
