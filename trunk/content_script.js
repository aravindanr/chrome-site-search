/**
 * Find the selected text and send it back to the background page.
 */
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    var selectedText = window.getSelection().toString();    
    sendResponse({"selectedText" : selectedText});
});