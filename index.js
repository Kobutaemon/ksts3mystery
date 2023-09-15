let element = document.getElementById("answer");
let message = document.getElementById("message");
let finishPic = document.getElementById("finish-pic");
let finish1a = document.getElementById("finish1a");

function messageError() {
  message.classList.remove("d-none");
  message.innerText = "認証失敗";
  setTimeout(function() {
    message.classList.add("d-none");
  }, 3000);
}

function drpProc() {
  scrollTo(0, 0);
  $(document).ready(function() {
    $("#finish-pic").fadeIn(2000)
    $("#finish-pic").bxSlider({
      auto: false,
      infiniteLoop: false,
      pager: false
    });
  });
}

window.document.onkeydown = (e) => {
  if (e.keyCode === 13) {
    switch (element.value) {
        case "kst":
          alert("kst");
          break;

        case "DR.P":
          drpProc();
          break;

        default:
          messageError();
          break;
    }
  }  
}

function check_word() {
    switch (element.value) {
        case "kst":
            alert("kst");
            break;

        case "drp":
            drpProc();
            break;

        default:
            messageError();
            break;
  }
}
