$(document).ready(function() {
    /*seracj n=bar*/
    $('.navigate .look').click(function() {
        $('.serach').slideToggle("slow");
    });
    /*our projects*/
    $('.Featured-Work ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-md').css('opacity', 1);
        } else {
            $('.shuffle-images .col-md').css('opacity', 1);
            $($(this).data('class')).parent().css('opacity', '.08');
        }
    });
    //   accordeian
    $("#accordion").accordion();
    //counter

    // $('.count').each(function() {
    //     $(this).prop('Counter', 0).animate({
    //         Counter: $(this).text()
    //     }, {
    //         duration: 10000,
    //         easing: 'swing',
    //         step: function(now) {
    //             $(this).text(Math.ceil(now));
    //         }
    //     });
    // });



    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });

    });
    $('#s1').mouseenter(function() {
        $('#a1').slideDown("slow");
        $('#q1').slideDown("slow");
    });
    $('#s2').mouseenter(function() {
        $('#a2').slideDown("slow");
        $('#q2').slideDown("slow");
    });
    $('#s3').mouseenter(function() {
        $('#a3').slideDown("slow");
        $('#q3').slideDown("slow");
    });
    $('#s1').mouseleave(function() {
        $('#a1').slideUp();
        $('#q1').slideUp();

    });
    $('#s2').mouseleave(function() {
        $('#a2').slideUp();
        $('#q2').slideUp();
    });
    $('#s3').mouseleave(function() {
        $('#a3').slideUp();
        $('#q3').slideUp();

    });

    // $('.show').click(function() { if ($(this).next().hasClass('arrow')) $('.arrow').slideToggle("slow"); });


    //
    // var i = $('.about-us #accordion h3');
    // i.click(function() {
    //     // $('#clk').siblings().css({ "display": "none" });
    //     // $('#clk').siblings().css({ "display": "none" });
    //     // $('#clk').slideToggle('slow');
    //     // $('#clk').nextAll().css({ "display": "none", "color": "#1e1d24" });
    //     // $('#clk').prevAll().css({ "display": "none", "color": "#1e1d24" });
    // });

    /*hover */
    // var x = $('.Featured-Work .shuffle-images .row .box');
    // var y = $('.Featured-Work .shuffle-images .row .box .overlay');
    // x.hover(function() {
    //     y.show(1000);;
    // }, function() {
    //     y.hide(1000);
    // });
});