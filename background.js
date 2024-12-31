chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ points: 0, achievements: [] });
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      trackWebsite(tab);
    }
  });
  
  function trackWebsite(tab) {
    const educationalWebsites = ['edx.org', 'coursera.org', 'khanacademy.org'];
  
    educationalWebsites.forEach(website => {
      if (tab.url.includes(website)) {
        addPoints(10); // Assign 10 points for visiting educational sites
      }
    });
  }
  
  function addPoints(points) {
    chrome.storage.local.get('points', data => {
      let totalPoints = data.points || 0;
      totalPoints += points;
      chrome.storage.local.set({ points: totalPoints });
    });
  }
  