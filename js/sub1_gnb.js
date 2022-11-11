$(function(){
    //메인
    $(".gnb>li").mouseenter(function(){
        $(this).children(".sub").stop().slideDown();
        $("#header .box").stop().fadeIn();
    });//마우스올라갔을때 이벤트
    $(".gnb>li").mouseleave(function(){
        $(this).children(".sub").stop().slideUp();
        $("#header .box").stop().fadeOut();


    
    });//마우스내려갔을때 이벤트
/* -- hover를 써서 하는 경우-- */

/* 1. slideDown, slideUp을 쓰는경우
    $(".gnb_inner>ul>li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    },
    function(){
        $(this).children(".sub").stop().slideUp();
    });
    */
   /*
    2. slideToggle사용때

    $(".gnb_inner>ul>li").hover(function(){
        $(this).children(".sub").stop().slideToggle();
    })

   */
});