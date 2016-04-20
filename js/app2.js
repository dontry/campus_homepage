$(document).ready(function() {
    $("#navigation li").on("click", function() {
        $(this).addClass("cur").siblings("li").removeClass("cur");
    });
})
