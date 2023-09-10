window.document.onkeydown = (e) => {
  	if (e.keyCode === 13) {
        let element = document.getElementById("answer");
        if (element.value.toLowerCase() === "kst"){
            alert("success");
        }
	}  
}

const check_word = () => {
    let element = document.getElementById("answer");
    if (element.value.toLowerCase() === "kst"){
        alert("success");
    }
}