/*
* index_event.js
*/
$(function(){
    $(".header_li").on("click",function(){
        //location.href="#"+$(this).text();
        $('html, body').animate({scrollTop : $("#"+$(this).text()).offset().top}, 700);
    });
    $("#memu_Box").on("click",function(){
        if($("#menu_Bar1").hasClass("on")){
            $(".menu_Bar").removeClass("on");
            $('#Mobile').slideUp(300);
        }else{
            $(".menu_Bar").addClass("on");
            $('#Mobile').slideDown(300);
        }
    });
});