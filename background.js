chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    points: 0,
    blockedSites: [],
    productiveSites: [],
    leaderboard: [],
  });

  chrome.alarms.create("habitTracker", { periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "habitTracker") {
    chrome.storage.local.get(["productiveSites", "points"], (result) => {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        const currentTab = tabs[0]?.url;

        if (currentTab && result.productiveSites.some((site) => currentTab.includes(site))) {
          const newPoints = (result.points || 0) + 10;
          chrome.storage.local.set({ points: newPoints });
          console.log(`Earned 10 points for visiting a productive site! Total points: ${newPoints}`);
        }
      });
    });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    chrome.storage.local.get(["blockedSites"], (result) => {
      if (result.blockedSites.some((site) => changeInfo.url.includes(site))) {
        chrome.tabs.remove(tabId);
        alert("This site is blocked to keep you productive!");
      }
    });
  }
});
