$('#dropdownMenu1').on('show.bs.dropdown', function () {
    $('#dropdownMenu1').dropdown('toggle');
    $('body').animate()
})

$(document).ready(function () {
    $('.bxslider').bxSlider();
});

$('.latest-work .bxslider').bxSlider({
    nextSelector: '#bx-ileri',
    prevSelector: '#bx-geri',
    nextText: '>',
    prevText: '<',
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 275,
    pager: false
});

$('.our-clients .bxslider').bxSlider({
    nextSelector: '#bx-ileri2',
    prevSelector: '#bx-geri2',
    nextText: '>',
    prevText: '<',
    pager:false
});


$(window).scroll(function () {
    $('#header').css("z-index", "999999");
});