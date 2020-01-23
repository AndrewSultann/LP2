$(document).ready(function() {
        
    $("a.image").fancybox();
    

    // $(document).scroll(function () {
    //     $(".nav-top").toggleClass("scrolled", $(this).scrollTop() > $("#navbar").height());
    //     $(".logo-holder").toggleClass("logo-scrolled", $(this).scrollTop() > $("#navbar").height());

    // });

    $('body').sidePanelForm({
        'form_id': '#contact_form_1'
    });
    
    
    $('#contact_form_1').validate({
        errorPlacement: function (error, element)
        {
            element.after(error);
        }
    });
    $('#contact_form').validate({
        errorPlacement: function (error, element)
        {
            element.after(error);
        }
    });
    
    function goToByScroll(id){
          // Remove "link" from the ID
        id = id.replace("link", "");
          // Scroll
        $('html,body').animate({
            scrollTop: $(id).offset().top},
            'slow');
    }

    $('a:not(#backtotop, .openForm a)').click(function(e) { 
        var link = $(this).attr('href');

        if (link.indexOf('#') > -1) {
            // Prevent a page reload when a link is pressed
            e.preventDefault(); 
              // Call the scroll function
            goToByScroll(link);

        }
    });

    $('#backtotop').click(function(e) { 
        e.preventDefault(); 

        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    });
    
    if ($('.tools').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.tools').addClass('show');
                } else {
                    $('.tools').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
    }
}); 