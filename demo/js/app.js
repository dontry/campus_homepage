$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});


    $('#fullpage').fullpage({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff'],
        anchors: ['page1', 'page2', 'page3','page4'],
        css3: true,
        slidesNavigation:true,
        // navigation: true,
        // navigationTooltips: ['首页','功能介绍','内容','下载'],
        scrollBar: true
    });
});