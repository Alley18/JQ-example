var shown;

$(document).keypress(function(event){

    $("h1").html(event.key);
})

$("h1").addClass("big-title");

$("h1").on("mouseover", function(){

    $("h1").css("color", "black");
});