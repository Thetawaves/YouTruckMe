$(document).ready(function () {

    /* Video resize */

    var headerHeight = $("header").height();
    $("video").attr("height", headerHeight);

    $(window).on('resize', function () {
        headerHeight = $("header").height();
        $("video").attr("height", headerHeight);
    });

    /* checkbox toggle */

    $("#contact .wrap .contact-form form input[type='checkbox']").on('click', function () {
        $("#contact .wrap .contact-form form #slide").toggleClass("checked");
    });

    /* PopUp Modal */

    $("form").on('submit', function (e) {
        e.preventDefault();
        $(".modal").fadeIn(300);
    });

    /* Dismiss modal */

    $(".modal button").on('click', function () {
        $(".modal").fadeOut(300);
        $("#contact .wrap .contact-form form input[type='text'], #contact .wrap .contact-form form input[type='email']").val("");
        $("#contact .wrap .contact-form form input[type='checkbox']").prop("checked", false);
        $("#contact .wrap .contact-form form #slide").toggleClass("checked");
    });

    //// Animations ////


    /* Header */
    setTimeout(function () {
        $("header .wrap .slide-up").addClass('slideUpFade');
    }, 1000);


    /* Inline */

    var inlineScrollTop = $("#services .wrap .flex-container").offset().top,
        scrollTop,
        windowHeight = ($(window).height()) / 2,
        i = 1,
        accentScrollTop = $("#contact .wrap").offset().top,
        lastScrollTop = $("#last .wrap").offset().top;

    $(window).on('resize', function () {
        inlineScrollTop = $("#services .wrap .flex-container").offset().top;
        accentScrollTop = $("#contact .wrap").offset().top;
        lastScrollTop = $("#last .wrap").offset().top;
        windowHeight = ($(window).height()) / 2;
    });

    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();
        if (windowHeight + scrollTop >= inlineScrollTop) {

            $("#services .wrap .flex-container .card").each(function (i) {
                $(this).delay(i * 300).queue(function () {
                    $(this).find("div").addClass('slideUpFade').dequeue();
                    $(this).find("img").addClass('popUp').dequeue();
                });
            });

            //// Soluzione bella ma non sempre funzionante ////

            /*function delayAnimation() {
                $("#services .wrap .flex-container .card:nth-of-type(" + i + ") div").addClass('slideUpFade');
                $("#services .wrap .flex-container .card:nth-of-type(" + i + ") img").addClass('popUp');
                if (i < 4) {
                    setTimeout(delayAnimation, 500);
                }
                i++;
            }
            delayAnimation();*/

            //// Soluzione brutta ma funzionante per il delay ////

            /*setTimeout(function() {
                $("#services .wrap .flex-container .card:nth-of-type(1) div").addClass('slideUpFade');
                $("#services .wrap .flex-container .card:nth-of-type(1) img").addClass('popUp');
            }, 0);
            setTimeout(function() {
                $("#services .wrap .flex-container .card:nth-of-type(2) div").addClass('slideUpFade');
                $("#services .wrap .flex-container .card:nth-of-type(2) img").addClass('popUp');
            }, 300);
            setTimeout(function() {
                $("#services .wrap .flex-container .card:nth-of-type(3) div").addClass('slideUpFade');
                $("#services .wrap .flex-container .card:nth-of-type(3) img").addClass('popUp');
            }, 600);
            setTimeout(function() {
                $("#services .wrap .flex-container .card:nth-of-type(4) div").addClass('slideUpFade');
                $("#services .wrap .flex-container .card:nth-of-type(4) img").addClass('popUp');
            }, 900);*/
        }

        /* Accent */

        if (windowHeight + scrollTop >= accentScrollTop) {
            setTimeout(function () {
                $("#contact .wrap .info div:nth-of-type(1)").addClass('slideRightFade');
            }, 0);
            setTimeout(function () {
                $("#contact .wrap .info div:nth-of-type(2)").addClass('slideRightFade');
            }, 300);
            setTimeout(function () {
                $("#contact .wrap .img img").addClass('slideUpFade');
            }, 600);
        }

        /* Last */

        if (windowHeight + scrollTop >= lastScrollTop) {
            setTimeout(function () {
                $("#last .wrap .card:nth-of-type(1)").addClass('slideUpFade');
            }, 0);
            setTimeout(function () {
                $("#last .wrap .card:nth-of-type(2)").addClass('slideUpFade');
            }, 300);
            setTimeout(function () {
                $("#last .wrap .card:nth-of-type(3)").addClass('slideUpFade');
            }, 600);
        }
    });

    /* Scroll top */

    $(".scroll").on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

});
