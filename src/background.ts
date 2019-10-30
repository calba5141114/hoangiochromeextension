chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.networking)
            sendResponse({ message: "hi to you" });
    });

