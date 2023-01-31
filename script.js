

$(document).ready(function(){

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          $("#name").html(data.results[0].name.first + " " + data.results[0].name.last);
          $("#about-name").html(data.results[0].name.first + " " + data.results[0].name.last);
          $("#contact-name").html(data.results[0].name.first + " " + data.results[0].name.last);
          $("#location").html(data.results[0].location.street.name + ", " + data.results[0].location.city);
          $("#email").html(data.results[0].email);
          var link = data.results[0].picture.large;
          $("#image").attr("src", link);
        }
    });


    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});


