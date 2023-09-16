let element = document.getElementById("answer");
let message = document.getElementById("message");
let nextMessage = document.getElementById("next-button");
let finishKstPic = document.getElementById("finish-kstPic");
let finishDrpPic = document.getElementById("finish-drpPic");

function messageError() {
  message.innerText = "パスコードが違います";
  setTimeout(function() {
    message.classList.add("d-none");
  }, 3000);
}

function kstProc() {
  nextMessage.innerText = "NEXT";
  $(document).ready(function() {
    $("#finish-kstPic").fadeIn(2000);
    $("#finish-kstPic").bxSlider({
      auto: false,
      infiniteLoop: false,
      pager: false
    });
  });
}

function drpProc() {
  nextMessage.innerText = "NEXT";
  scrollTo(0, 0);
  $(document).ready(function() {
    $("#finish-drpPic").fadeIn(2000)
    $("#finish-drpPic").bxSlider({
      auto: false,
      infiniteLoop: false,
      pager: false
    });
  });
}

window.document.onkeydown = (e) => {
  if (e.keyCode === 13) {
    switch (element.value) {
        case "KST":
          kstProc();
          $("#answer").blur();
          break;

        case "DR.P":
          drpProc();
          $("#answer").blur();
          break;

        default:
          messageError();
          break;
    }
  }  
}

function check_word() {
    switch (element.value) {
        case "KST ":
            kstProc();
            $("#answer").blur();
            break;

        case "DR.P":
            drpProc();
            $("#answer").blur();
            break;

        default:
            messageError();
            break;
  }
}
