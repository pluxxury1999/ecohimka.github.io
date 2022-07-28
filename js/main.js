$(document).ready(function(){
//    acсordion
    
    $('.accordion__title').click(function(){
        $(this).next('.accordion__content').slideToggle(400);
    });
    
    $('.accordion__title').click(function(){
        $(this).toggleClass('accordion__title_active');
    });
    
    
//phone mask
    $("#user_phone").mask("+38 (099) 999-99-99");
    $("#user_phone2").mask("+38 (099) 999-99-99");
    
//popup
    $('.callback__btn, .header_callback_btn').click(function(e){
        e.preventDefault();
        $('.popup, .popup_content').addClass('active');
    });
    
    $('.popup_close').click(function(e){
        e.preventDefault();
        $('.popup, .popup_content').removeClass('active');
    });
    
//scroll    
    $("a.nav_link").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 20
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
    });
    
    $("a.footer-nav__link").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 20
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
    });
    // BURGER
    $('.header__burger').click(function(){
       $('.header__burger, .burger__menu, .sidebar').toggleClass('active');
       $('.body').toggleClass('lock');
    });
    
    $("a.mobile-nav_link").click(function() {
        $('.body').toggleClass('lock');
        $('.header__burger, .burger__menu, .sidebar').toggleClass('active');
        $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 20
        }, {
         duration: 500,
         easing: "swing"
        });
         return false;
        });
});

