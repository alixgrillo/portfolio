// $('#textarea1').val('New Text');
//   M.textareaAutoResize($('#textarea1'));


$('.portfolio-carousel').slick({
    dots: true,
    // fade: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(document).ready(function(){
    $(".btn").click(function() {
        switch(this.id) {
            case 'download':window.open('assets/documents/cv-Alexandra_Clare.pdf'); break;
            case 'github': window.open('https://github.com/alixgrillo'); break;
            case 'linkedin': window.open('https://www.linkedin.com/in/alixclare/'); break;
            case 'hireme': window.location.href = "#contact"; break;
        }
    });
})