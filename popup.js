// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('pagetitle').innerHTML = message;
	//console.log(message);
	window.navigator.clipboard.writeText(message).then(() => {
	    console.log(success);
	}, () => {
		document.getElementById('title').innerHTML = "Failed to Copy the data.";
	    //clipboard write failed, use fallback
	});
});