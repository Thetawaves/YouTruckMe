$(document).ready(function () {
    $("#contact .wrap .contact-form form input[type='checkbox']").on('click', function () {
        $("#contact .wrap .contact-form form #slide").toggleClass("checked");
    });

    $("form").on('submit', function(e) {
        e.preventDefault();
        $(".modal").fadeIn(300);
    });

    $(".modal button").on('click', function () {
        $(".modal").fadeOut(300);
        $("#contact .wrap .contact-form form input[type='text'], #contact .wrap .contact-form form input[type='email']").val("");
        $("#contact .wrap .contact-form form input[type='checkbox']").prop("checked", false);
        $("#contact .wrap .contact-form form #slide").toggleClass("checked");
    })
})
