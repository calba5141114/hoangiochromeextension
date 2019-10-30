
const handleNetworking = (request: any) => {

}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.networking) handleNetworking(request);
});

