let exGif = document.getElementById("ex-gif");
let clearPic = document.getElementById("clearPic");

function buttonYes() {
    exGif.setAttribute("src", "src/expl.gif");
    setTimeout(function() {
        $("#ex-gif").fadeOut(2000); 
    }, 1000)
    setTimeout(function() { 
        $("#clearPic").attr("src", "src/clearA.png");
        $("#clearPic").fadeIn(2000);
    },2000)
}

function buttonNo() {
    $("#clearPic").attr("src", "src/clearB.png");
    $("#clearPic").fadeIn(2000);
}