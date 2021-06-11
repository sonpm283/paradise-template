$(document).ready(function() {
    dropDownMenu.init();
    hamburgerMenu.init();
    navFixed.init();
    heroCarousel.init();
    serviceCarousel.init();
    tabNews.init();
});

// hamburger menu 
const hamburgerMenu = {
    init: function() {
        this.hamburgerMenu();
    },
    hamburgerMenu: function() {
        var menuBtn = document.querySelector('.hamburger-menu');
        var menuMb  = document.querySelector('.nav-mb');
        var overlay = document.querySelector('.nav-overlay');
        var body = document.getElementsByTagName("body")[0];
        overlay.onclick = () => {
            menuMb.classList.toggle('active');
            body.classList.remove('is-hidden');
        }
        menuBtn.onclick = () => {
            menuMb.classList.toggle('active');
            body.classList.add('is-hidden');
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
        const backToTop = document.querySelector('.back-top');
        window.onscroll = function () {
            if (document.body.scrollTop > navTop.offsetHeight || document.documentElement.scrollTop > navTop.offsetHeight) {
                backToTop.classList.add('active');
                navMenu.classList.add('nav-fixed');
            }else {
                navMenu.classList.remove('nav-fixed');
                backToTop.classList.remove('active');
            }
        }
    }
}


// back to top


// responsive menu
const dropDownMenu = {
    init: function () {
        this.subMenuChild();
        this.megaMenuMb();
    },
    subMenuChild: function () {
        $(".menu-mb .menu-mb-item a").click(function (event) {
            var target = $(this).parent().children(".drop-down");
            $(target).slideToggle();
             event.preventDefault();
        });
    },
    megaMenuMb: function () {
        $(".drop-down li a").click(function () {
            var target = $(this).parent().children(".mega-list");
            $(target).slideToggle();
        });
    },
};

const tabNews = {
    init: function() {
        this.tabNews();
    },
    tabNews: function() {
        var tabs  = $(".tab")
        var panes = $('.pane')
        tabs.click(function (e) {
            tabs.removeClass("active")
            $(this).addClass("active")
            panes.hide();
            var pane = $(this).attr('data-pane');
            console.log(pane);
            $(pane).fadeIn(500);
            e.preventDefault();
        });

        $("h2 a.tab:first").click();
    }
}

// hero carousel
const navText = ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>" ];
const heroCarousel = {
    init : function () {
        this.heroCarousel();
    },
    heroCarousel: function() {
        $("#hero-carousel").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            autoplay: true,
            navText: navText,
            autoplayHoverPause: true
        })
    }
}

// services carousel
const serviceCarousel = {
    init : function () {
        this.serviceCarousel();
    },
    serviceCarousel: function() {
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
    }
}


