 $(document).ready(function() {
     $("#demosMenu").change(function() {
         window.location.href = $(this).find("option:selected").attr("id") + '.html';
     });


     $('#fullpage').fullpage({
         sectionsColor: ['#fff', '#fff', '#191c1e', '#fff'],
         anchors: ['page1', 'page2', 'page3', 'page4'],
         css3: true,
         // slidesNavigation: true,
         navigation: true,
         navigationTooltips: ['首页','功能介绍','内容','下载'],
         navigationColor: '#000eea',
         scrollBar: true,
         // loopHorizontal: true,
         // afterLoad: function(anchor, index) {
         //     if (index === 1) {
         //         interval = setInterval(function() {
         //             $.fn.fullpage.moveSlideRight();
         //             console.log("move slide");
         //         }, 5000);
         //     } else {
         //         clearInterval(interval);
         //     }
         // }
     });

     $(".pointer").on("mouseover", function() {
         var idx = $(this).index();
         $("#iphoneScreen img").eq(idx).fadeIn(1000).siblings("img").fadeOut(500);
         $("#copywriting li").eq(idx).addClass("cur").siblings("li").removeClass("cur");
         $(this).addClass("cur").siblings("li").removeClass("cur");
     });

     $("#navigation li").on("click", function() {
         $(this).addClass("cur").siblings("li").removeClass("cur");
     });
 });

$(document).ready(function() {
    $("#navigation li").on("click", function() {
        $(this).addClass("cur").siblings("li").removeClass("cur");
    });
})
