$(document).ready(function(){
    var p = $( "#technical-skills" );
    var offset = p.offset();
    $(".navbar").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= offset.top - 140) {
            $('.navbar').show();
        } else {
            $('.navbar').fadeOut();
        }
    });
});