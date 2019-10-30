
const handleNetworking = async (request: any) => {
    return await fetch(request.endpoint, { method: request.method })
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.networking) {
        sendResponse({ result: await handleNetworking(request) })
    }
    else {
        sendResponse({ message: "unknown request and or command." })
    }
});

