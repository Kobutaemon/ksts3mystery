let element = document.getElementById("answer");
let message = document.getElementById("message");
//let finishKstPic = document.getElementById("finish-kstPic");
//let finishDrpPic = document.getElementById("finish-drpPic");
//let finish1a = document.getElementById("finish1a");

function messageError() {
  message.classList.remove("d-none");
  message.innerText = "パスコードが違います";
  setTimeout(function() {
    message.classList.add("d-none");
  }, 3000);
}

function kstProc() {
  scrollTo(0, 0);
  $(document).ready(function() {
    $("#finish-kstPic").fadeIn(2000)
    $("#finish-kstPic").bxSlider({
      auto: false,
      infiniteLoop: false,
      pager: false
    });
  });
}

function drpProc() {
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
        case "kst":
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
        case "kst":
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
