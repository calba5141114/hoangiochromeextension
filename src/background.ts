
const handleNetworking = async (request: any) => {
    try {
        const data = await fetch(request.endpoint, { method: request.method });
        return await fetch(request.endpoint, { method: request.method })
    } catch (error) {
        console.error(error);
    }
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    try {
        if (request.networking) {
            sendResponse({ result: await handleNetworking(request) });
        }
        else {
            sendResponse({ message: "unknown request and or command." });
        }
    } catch (error) {
        sendResponse({ message: error });
    }
});

