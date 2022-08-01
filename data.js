
chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.action === 'tabsdata') {
        let tabs = msg.data;
        list = document.getElementById('list');
        for (const t of tabs){
            console.log(t.url);
            p = document.createElement('div')
            p.innerText = t.url;
            list.appendChild(p);
        }
        console.log("Finish!!");

        // you can use msg.data only inside this callback
        // and you can save it in a global variable to use in the code 
        // that's guaranteed to run at a later point in time
    }
});
