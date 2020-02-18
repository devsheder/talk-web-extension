const log = (...args) => {
    console.log("Native messaging extensions - background >", ...args);
}

log("start");

let callback;
const onNativeMessage = (message) => {
    log("Received message", message);
    if (!!callback) {
        callback(message);
        callback = undefined;
    }
}

const onDisconnected = () => {
    log("Failed to connect", port);
}

// Multi-browser
let specificBrowserObject;
let nativAppName;
const nativAppNameTemplate = "my_native_app_";
if (navigator.vendor.includes("Google")) {
    specificBrowserObject = chrome;
    nativAppName = `${nativAppNameTemplate}chrome`;
} else {
    specificBrowserObject = browser;
    nativAppName = `${nativAppNameTemplate}ff`;
}

log("Connecting to native messaging host", nativAppName);
const port = specificBrowserObject.runtime.connectNative(nativAppName);
port.onMessage.addListener(onNativeMessage);
port.onDisconnect.addListener(onDisconnected);

specificBrowserObject.runtime.onMessage.addListener((request, sender, sendResponse) => {
    log("Message received from the content script ", request);
    port.postMessage(request);
    callback = sendResponse;
    return true;
});

log("end");