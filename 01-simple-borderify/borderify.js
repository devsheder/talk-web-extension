const log = (...args) => {
    console.log("Borderify extension >", ...args);
}

log("start");

const googleSearchTextField = document.querySelector('input[type="text"]');
log("googleSearchTextField", googleSearchTextField);
googleSearchTextField.style.border = "5px solid red";

log("end");