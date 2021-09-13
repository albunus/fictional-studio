// what we do section
$(document).ready(function () {
    $(".one").click(function () {
        $(".image1").toggle(1000);
        $(".para1").toggle(1000);
    });
    $(".two").click(function () {
        $(".image2").toggle(1000);
        $(".para2").toggle(1000);
    });
    $(".three").click(function () {
        $(".image3").toggle(1000);
        $(".para3").toggle(1000);
    });

//portfolio
$('.image4').mouseover(function(){
    $(".grey").show();
});
$('.image4').mouseOut(function(){
    $(".grey").hide();
});

$('.image5').mouseover(function(){
    $(".grey").show();
});
$('.image5').mouseOut(function(){
    $(".grey").hide();
});
$('.image6').mouseover(function(){
    $(".grey").show();
});
$('.image6').mouseOut(function(){
    $(".grey").hide();
});
$('.image7').mouseover(function(){
    $(".grey").show();
});
$('.image7').mouseOut(function(){
    $(".grey").hide();
});
$('.image8').mouseover(function(){
    $(".grey").show();
});
$('.image8').mouseOut(function(){
    $(".grey").hide();
});
$('.image9').mouseover(function(){
    $(".grey").show();
});
$('.image9').mouseOut(function(){
    $(".grey").hide();
});
$('.image10').mouseover(function(){
    $(".grey").show();
});
$('.image10').mouseOut(function(){
    $(".grey").hide();
});
$('.image11').mouseover(function(){
    $(".grey").show();
});
$('.image11').mouseOut(function(){
    $(".grey").hide();
});
});
//form validation
function formTush() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!")
    } else {
        alert("Thank you dear" + " " + name + " " + "for choosing us! Your message has been successfully delivered. We shall get back to you shortly. Thank you once more, Bye.");
        document.getElementById("form");
    }
}