let element = document.getElementById("answer");
let message = document.getElementById("message");

function messageError() {
  message.classList.remove("d-none");
  message.innerText = "認証失敗";
  setTimeout(function() {
    message.classList.add("d-none");
  }, 4000);
}

window.document.onkeydown = (e) => {
  if (e.keyCode === 13) {
    switch (element.value.toLowerCase()) {
      case "kst":
        alert("success");
        break;

      case "drp":
        alert("success");
        break;

      default:
        messageError();
    }
  }  
}

function check_word() {
  switch (element.value.toLowerCase()) {
    case "kst":
      alert("success");
      break;

    case "drp":
      alert("success");
      break;

    default:
      messageError();
  }
}  
