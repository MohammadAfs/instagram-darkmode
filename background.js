chrome.webNavigation.onBeforeNavigate.addListener(function(data) {
    const {url} = data;
    if(url.match(/https:\/\/(www)?\.instagram.com/gim) && !url.includes("?theme=dark")) {
      chrome.tabs.update(data.tabId, {url: `${url}?theme=dark`});
    }
  });
