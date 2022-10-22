$(document).ready(function(){

    //MyVariant 
    // $('.col-sm-3:eq(1)').on('click', function(){
    //     $('.overlay').fadeIn();
    //     $('.modal').slideDown(600);
    //     $('.close__modal').on('click', function(){
    //         $('.modal').hide(600);
    //         $('.overlay').hide(600);
    //     });
    // });
    // $('.col-sm-3:eq(2)').on('click', function(){
    //     $('.overlay').fadeIn();
    //     $('.modal').slideDown(600);
    //     $('.close__modal').on('click', function(){
    //         $('.modal').hide(600);
    //         $('.overlay').hide(600);
    //     });
    // });
    // $('#tours').on('click', function(){
    //     $('.overlay').fadeIn();
    //     $('.modal').slideDown(600);
    //     $('.close__modal').on('click', function(){
    //         $('.modal').hide(600);
    //         $('.overlay').hide(600);
    //     });
    // });

    //Teacher variant

    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });

});