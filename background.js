async function queryTabs(tab) {
    let tabs = await chrome.tabs.query({ });
    for (const t of tabs) {
        console.log(t.url);
    }
}
chrome.action.onClicked.addListener(queryTabs);
