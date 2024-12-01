<<<<<<< HEAD
$(document).ready(function(){
    $('#mobile_btn').on('click', function (){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function (){
            const header = $('header');

           
        const scrollPosition = $(window).scrollTop() - header.outerHeight ();
    
        let activeSectionIndex = 0;


        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        }else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.2');
        }


        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;

            const sectionBottom = sectionTop+ section.outerHeight();
        
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }

        });

            navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

    });

    ScrollReveal ().reveal('#cta', {
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal ().reveal('.dish', {
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

 
=======
$(document).ready(function(){
    $('#mobile_btn').on('click', function (){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function (){
            const header = $('header');

           
        const scrollPosition = $(window).scrollTop() - header.outerHeight ();
    
        let activeSectionIndex = 0;


        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        }else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.2');
        }


        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;

            const sectionBottom = sectionTop+ section.outerHeight();
        
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }

        });

            navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

    });

    ScrollReveal ().reveal('#cta', {
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal ().reveal('.dish', {
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

 
>>>>>>> b4e0dce9974c93538ddeae6fb2f7c40592a6a4c7
});