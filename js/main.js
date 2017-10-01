/*------------------------------------------

Start Main JS For Gillian's Place 2014.

------------------------------------------*/


// Start Script For IE Placeholder

    if ($.browser.msie) {         //this is for only ie condition ( microsoft internet explore )
        $('input[type="text"][placeholder], input[type="email"][placeholder], textarea[placeholder]').each(function() {
            var obj = $(this);

            if (obj.attr('placeholder') != '') {
                obj.addClass('IePlaceHolder');

                if ($.trim(obj.val()) == '' && obj.attr('type') != 'password') {
                    obj.val(obj.attr('placeholder'));
                }
            }
        });

        $('.IePlaceHolder').focus(function() {
            var obj = $(this);
            if (obj.val() == obj.attr('placeholder')) {
                obj.val('');
            }
        });

        $('.IePlaceHolder').blur(function() {
            var obj = $(this);
            if ($.trim(obj.val()) == '') {
                obj.val(obj.attr('placeholder'));
            }
        });
    }

// End Script For IE Placeholder

$('#window-close').click(function(){
    $("body").css("display", "none");
    window.location = "http://www.google.com";
});



    $(document).ready(function() {
     
    var owl = $("#owl-demo");
     
    owl.owlCarousel({
    items : 2, //10 items above 1000px browser width
    itemsDesktop : [1000,2], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,2], // betweem 900px and 601px
    itemsTablet: [600,2], //2 items between 600 and 0
    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
     
    // Custom Navigation Events
    $(".next").click(function(){
    owl.trigger('owl.next');
    })
    $(".prev").click(function(){
    owl.trigger('owl.prev');
    })
    $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
    owl.trigger('owl.stop');
    })
     
    });

