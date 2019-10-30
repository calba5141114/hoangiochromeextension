
const handleNetworking = async (request: any) => {

}

chrome.runtime.onMessage.addListener( async (request, sender, sendResponse) => {
    if (request.networking) {
        handleNetworking(request)
    }
    else {
        sendResponse({message: "unknown request and or command."})
    }
});

