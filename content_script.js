/**
    Copyright 2010 Aravindan Ramkumar

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License. You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * Find the selected text and send it back to the background page.
 */
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    var selectedText = window.getSelection().toString();    
    sendResponse({"selectedText" : selectedText});
});