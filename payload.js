// send the page title as a chrome message
//chrome.runtime.sendMessage(document.title);
var temp = document.querySelectorAll('[data-cy="question-title"]');
//console.log(temp);
chrome.runtime.sendMessage('=HYPERLINK("' +  temp[0].baseURI + '", "'  + temp[0].innerHTML + '")');
//=HYPERLINK("https://leetcode.com/problems/reverse-bits/","190. Reverse Bits")
