$(document).ready(function(){
    $("button").mouseover(function(){
        $("#point").css("display", "block");
    });
    $("button").mouseout(function(){
        $("#point").css("display", "none");
    });
});