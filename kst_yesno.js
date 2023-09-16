let exGif = document.getElementById("ex-gif");
let yesPic = document.getElementById("yesPic");

function buttonYes() {
    exGif.setAttribute("src", "expl.gif");
    setTimeout(function() {
        $("#ex-gif").fadeOut(2000); 
    }, 1000)
    setTimeout(function() { 
        yesPic.classList.remove("d-none");
    },3500)
}

function buttonNo() {
}