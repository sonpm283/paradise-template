$(document).ready(function() {
    dropDownMenu.init();
    hamburgerMenu.init();
    navFixed.init();
});

// hamburger menu 
const hamburgerMenu = {
    init: function() {
        this.hamburgerMenu();
    },
    hamburgerMenu: function() {
        var menuBtn = document.querySelector('.hamburger-menu');
        var menuMb = document.querySelector('.nav-mb');
        var overlay = document.querySelector('.nav-overlay');
        overlay.onclick = () => {
            menuMb.classList.toggle('active');
        }
        menuBtn.onclick = () => {
            menuMb.classList.toggle('active');
        }
    }
}

// scroll fixed nav 
const navFixed = {
    init: function () {
        this.navFixed();
    },
    navFixed: function() {
        const navTop = document.querySelector('.header-top');
        const navMenu = document.querySelector('.header-main');
        window.onscroll = function () {
            if (document.body.scrollTop > navTop.offsetHeight || document.documentElement.scrollTop > navTop.offsetHeight) {
                navMenu.classList.add('nav-fixed');
            } else {
                navMenu.classList.remove('nav-fixed');
            }
        }  
    }
}

// responsive menu
const dropDownMenu = {
    init: function () {
        this.subMenuChild();
        this.megaMenuMb();
    },
    subMenuChild: function () {
        $(".menu-mb .menu-mb-item a").click(function () {
            var target = $(this).parent().children(".drop-down");
            $(target).slideToggle();
        });
    },
    megaMenuMb: function () {
        $(".drop-down li a").click(function () {
            var target = $(this).parent().children(".mega-list");
            $(target).slideToggle();
        });
    },
};


// owl
const navText = ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>" ];
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
