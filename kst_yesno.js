let exGif = document.getElementById("ex-gif");

function buttonYes() {
    exGif.setAttribute("src", "expl.gif");
    setTimeout(function() {
        $("#ex-gif").fadeOut(2000); 
    }, 800)
    setTimeout(function() {
        document.location.assign("");
    },1000)
}

function buttonNo() {
}