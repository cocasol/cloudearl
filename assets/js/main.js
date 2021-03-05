! function(e) {
    "use strict";
    if (e('ul.nav li a[href="#"]').on("click", function(e) {
            e.preventDefault()
        }), e(".header ul.nav > li > a").append('<span class="menu-mark"></span>'), e(".nav-wrapper").menumaker({
            title: "<span></span>",
            format: "multitoggle"
        }), e(e(window)).on("scroll", function() {
            e("ul.nav").hasClass("open") || e("#menu-button").removeClass("menu-opened")
        }), e(window).width() >= 992) {
        e(".menu-trigger").on("click", function() {
            e(this).toggleClass("active"), e(".main-menu-wrapper").toggleClass("show"), e(".logo-holder").toggleClass("d-none"), e(".nav-wrapper").toggleClass("active")
        })
    }
    e(window).on("scroll", function() {
        e(window).scrollTop() < 100 ? e(".header-main.love-sticky").removeClass("sticky fadeInDown animated") : e(".header-main.love-sticky").addClass("sticky fadeInDown animated")
    }), e("[data-bg-img]").css("background-image", function() {
        return 'url("' + e(this).data("bg-img") + '")'
    }).removeAttr("data-bg-img").addClass("bg-img");
    var a = function(e, a) {
        return void 0 === e ? a : e
    };
    e(".owl-carousel").each(function() {
        var t = e(this);
        t.owlCarousel({
            items: a(t.data("owl-items"), 1),
            margin: a(t.data("owl-margin"), 0),
            loop: a(t.data("owl-loop"), !0),
            smartSpeed: 450,
            autoplay: a(t.data("owl-autoplay"), !0),
            autoplayTimeout: a(t.data("owl-speed"), 5e3),
            center: a(t.data("owl-center"), !1),
            animateIn: a(t.data("owl-animate-in"), !1),
            animateOut: a(t.data("owl-animate-out"), !1),
            nav: a(t.data("owl-nav"), !1),
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: a(t.data("owl-dots"), !1),
            stagePadding: a(t.data("owl-stage-padding"), !1),
            autoWidth: a(t.data("owl-auto-width"), !1),
            responsive: a(t.data("owl-responsive"), {})
        })
    }), jQuery("img.svg").each(function() {
        var e = jQuery(this),
            a = e.attr("id"),
            t = e.attr("class"),
            o = e.attr("src");
        jQuery.get(o, function(o) {
            var n = jQuery(o).find("svg");
            void 0 !== a && (n = n.attr("id", a)), void 0 !== t && (n = n.attr("class", t + " replaced-svg")), !(n = n.removeAttr("xmlns:a")).attr("viewBox") && n.attr("height") && n.attr("width") && n.attr("viewBox", "0 0 " + n.attr("height") + " " + n.attr("width")), e.replaceWith(n)
        }, "xml")
    });
    let t = [{
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            color: "#C7E5FD"
        }, {
            lightness: 17
        }]
    }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
            color: "#f5f5f5"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 17
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 29
        }, {
            weight: .2
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 18
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 16
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#f5f5f5"
        }, {
            lightness: 21
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            color: "#dedede"
        }, {
            lightness: 21
        }]
    }, {
        elementType: "labels.text.stroke",
        stylers: [{
            visibility: "on"
        }, {
            color: "#ffffff"
        }, {
            lightness: 16
        }]
    }, {
        elementType: "labels.text.fill",
        stylers: [{
            saturation: 36
        }, {
            color: "#333333"
        }, {
            lightness: 40
        }]
    }, {
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
            color: "#f2f2f2"
        }, {
            lightness: 19
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
            color: "#fefefe"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#fefefe"
        }, {
            lightness: 17
        }, {
            weight: 1.2
        }]
    }];
    var o, n = e('[data-trigger="map"]');
    n.length && (o = n.data("map-options"), window.initMap = function() {
        n.css("min-height", "600px"), n.each(function() {
            var a, n, s, i, l = e(this);
            o = l.data("map-options"), n = parseFloat(o.latitude, 10), s = parseFloat(o.longitude, 10), i = parseFloat(o.zoom, 10), a = new google.maps.Map(l[0], {
                center: {
                    lat: n,
                    lng: s
                },
                zoom: i,
                scrollwheel: !1,
                disableDefaultUI: !0,
                zoomControl: !0,
                styles: t
            }), a = new google.maps.Marker({
                position: {
                    lat: n,
                    lng: s
                },
                map: a,
                animation: google.maps.Animation.DROP,
                draggable: !1,
                icon: "assets/img/map-marker2.svg"
            })
        })
    }, initMap()), e(window).on("load", function() {
        e(".preloader").fadeOut(1e3)
    });
    var s = e(".back-to-top");
    if (s.length) {
        var i = function() {
            e(window).scrollTop() > 400 ? s.addClass("show") : s.removeClass("show")
        };
        i(), e(window).on("scroll", function() {
            i()
        }), s.on("click", function(a) {
            a.preventDefault(), e("html,body").animate({
                scrollTop: 0
            }, 700)
        })
    }
    e(document.body).on("click", '[data-toggle="collapse"]', function(a) {
        var t = "#" + e(this).data("target");
        e(this).toggleClass("collapsed"), e(t).slideToggle(), a.preventDefault()
    });
    var l = e(".sheild-img"),
        r = e(".check-img, .setting2-img, .card-img"),
        c = e(".setting-img, .box-img"),
        f = e(".s_man"),
        d = e(".s_woman"),
        p = e(".layer");
    p.mousemove(function(e) {
        var a = -1 * e.pageX / 115,
            t = -1 * e.pageY / 115;
        l.css({
            transform: "translate3d(" + a + "px, " + t + "px,0)"
        })
    }), p.on("mousemove", function(e) {
        var a = -1 * e.pageX / 80,
            t = -1 * e.pageY / 80;
        r.css({
            transform: "translate3d(" + a + "px, " + t + "px,0)"
        })
    }), p.mousemove(function(e) {
        var a = -1 * e.pageX / 122,
            t = -1 * e.pageY / 122;
        c.css({
            transform: "translate3d(" + a + "px, " + t + "px,0)"
        })
    }), p.mousemove(function(e) {
        var a = -1 * e.pageX / 85,
            t = -1 * e.pageY / 58;
        f.css({
            transform: "translate3d(" + a + "px, " + t + "px,0)"
        })
    }), p.mousemove(function(e) {
        var a = -1 * e.pageX / 58,
            t = -1 * e.pageY / 85;
        d.css({
            transform: "translate3d(" + a + "px, " + t + "px,0)"
        })
    }), e(".mfp-iframe, .video-btn").magnificPopup({
        type: "video"
    }), e(".service_point-map-img").find(".l_info").on("mouseenter", function() {
        e(".service_point-map-img").find(".l_info").removeClass("active"), e(this).addClass("active")
    }), jQuery(document).ready(function(e) {
        e(".count-number").counterUp({
            delay: 10,
            time: 2e3
        })
    }), e("#countdown").countdown({
        date: "08/16/2021 23:59:59"
    }), e('[data-accordion-tab="toggle"]').each(function() {
        e(this).children(".accordion-content").hide(), e(this).on("click", function() {
            e(this).addClass("active").siblings().removeClass("active"), e(this).hasClass("active") && e(this).children(".accordion-content").slideDown(500).parents('[data-accordion-tab="toggle"]').siblings().children(".accordion-content").slideUp(500)
        }), e(this).hasClass("active") && e(this).children(".accordion-content").show()
    })
}(jQuery);