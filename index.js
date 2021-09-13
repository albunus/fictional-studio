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
$('.image4').hover(function(){
    $(".grey").show();
});
$('.image4').mouseOut(function(){
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