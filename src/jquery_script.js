$( document ).ready(function() {
    console.log( "jQuery is ready!" );
    $(".link").css({
      color: 'purple'
    });
    $(".link2").css({
      color: 'blue'
    });


    $(".github").css({
      color: '#6e5494'
    });
    $(".linkedin").css({
      color: '#0077B5'
    });
    $(".facebook").css({
      color: '#3b5998'
    });

    //media query
    if ($(window).width() >= 1024){
      // do something here
      $(".nav-link").css({
        color: 'white'
      });
    }
});


