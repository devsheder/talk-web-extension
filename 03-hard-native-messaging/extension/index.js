const log = (...args) => {
    console.log("Native messaging extensions - front >", ...args);
}

log("start");

const handleResponse = (response) => {
    log("Response from the background script", response);
    resultDiv.innerText = `Current processor temperature is ${response}`;
}

const resultDiv = document.getElementById("temp-result")

// Multi-browser
let specificBrowserObject;
if (navigator.vendor.includes("Google")) {
    specificBrowserObject = chrome;
} else {
    specificBrowserObject = browser;
}

document.getElementById("send-button").addEventListener("click", () => {
    const message = "get_temperature";
    log("Sending message to background", message);
    resultDiv.innerText = `Getting processor temperature...`;
    specificBrowserObject.runtime.sendMessage(null, message, null, handleResponse);
});

log("end");