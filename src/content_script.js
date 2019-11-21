// 受信
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	const response = request.message + ' through the content_script';
	sendResponse(response);
});