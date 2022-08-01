function onTabLoaded(tabId) {
  return new Promise(resolve => {
    chrome.tabs.onUpdated.addListener(function onUpdated(id, change) {
      if (id === tabId && change.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(onUpdated);
        resolve();
      }
    });
  });
}

async function doit(tab) {
    let tabs = await chrome.tabs.query({ });
    const newtab = await chrome.tabs.create({
      url: 'data.html',
    });
    await onTabLoaded(newtab.id);
    await chrome.tabs.sendMessage(newtab.id, {
        action: 'tabsdata',
        data: tabs,
    });

}

chrome.action.onClicked.addListener(doit);
