let answer = document.getElementById("answer");
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
  nextMessage.innerText = "NEXT >";
  $(".mystery").css("padding-top", "50%")
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

function nextButton() {
  switch (answer.value) {
    case "KST":
      document.location.assign("kst_yesno.html");
      break;

      default:
        break;
  }
}

window.document.onkeydown = (e) => {
  if (e.keyCode === 13) {
    switch (answer.value) {
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
    switch (answer.value) {
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
