//Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRZCuo2fL4n7dWUktLpbAkufSHUtRBo2M",
    authDomain: "portfolio-contact-me-fc298.firebaseapp.com",
    databaseURL: "https://portfolio-contact-me-fc298.firebaseio.com",
    projectId: "portfolio-contact-me-fc298",
    storageBucket: "portfolio-contact-me-fc298.appspot.com",
    messagingSenderId: "679157204035",
    appId: "1:679157204035:web:bf4562d1e6e1223c7100f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$(document).ready(function(){
    $('.modal').modal();
  });

$('.portfolio-carousel').slick({
    dots: true,
    // fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
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

$(document).ready(function () {
    $(".btn").click(function () {
        switch (this.id) {
            case 'download': window.open('assets/documents/cv-Alexandra_Clare.pdf'); break;
            case 'github': window.open('https://github.com/alixgrillo'); break;
            case 'linkedin': window.open('https://www.linkedin.com/in/alixclare/'); break;
            case 'hireme': window.location.href = "#contact"; break;
        }
    });
})



$(document).on("click", "#contact-submit", function (event) {
    event.preventDefault();

    var name = $("#contact-name").val().trim();
    var email = $("#contact-email").val().trim();
    var message = $("#contact-message").val().trim();

    console.log("button clicked ", name, email, message);
    console.log(typeof $("#contact-name").val().trim());

    if (name === "" || email == "") {
        $('.modal').modal('open');
    } else {
        database.ref().push({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.database.ServerValue.TIMESTAMP
       })
    }

    $("#contact-name").val("");
    $("#contact-email").val("");
    $("#contact-message").val("");

})