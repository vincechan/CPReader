// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function () {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL matches a codeproject article or tips url
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'codeproject.com/[Articles|Tips]' },
          })
        ],
        // And shows the extension's page action.
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});

// Called when the user clicks on the page action
chrome.pageAction.onClicked.addListener(function (tab) {
  // store the article url in contentUrl variable. The content in that url will be rendered in render.html.
  contentUrl = tab.url;

  // show the article page in a new tab
  chrome.tabs.create({ url: "render.html" });
});

// Store the url of the code project article whe page action is clicked on
var contentUrl = "";
