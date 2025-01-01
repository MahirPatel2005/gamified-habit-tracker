document.addEventListener("DOMContentLoaded", () => {
    const pointsDisplay = document.getElementById("points");
    const blockSitesButton = document.getElementById("block-sites");
    const addSiteButton = document.getElementById("add-productive-site");
    const leaderboardList = document.getElementById("leaderboard-list");
  
    // Fetch points from storage
    chrome.storage.local.get(["points"], (result) => {
      pointsDisplay.textContent = result.points || 0;
    });
  
    // Block Distracting Sites
    blockSitesButton.addEventListener("click", () => {
      const site = prompt("Enter the URL of the site to block:");
      if (site) {
        chrome.storage.local.get(["blockedSites"], (result) => {
          const blockedSites = result.blockedSites || [];
          blockedSites.push(site);
          chrome.storage.local.set({ blockedSites });
          alert(`${site} has been added to your blocked sites.`);
        });
      }
    });
  
    // Add Productive Site
    addSiteButton.addEventListener("click", () => {
      const site = prompt("Enter the URL of a productive site:");
      if (site) {
        chrome.storage.local.get(["productiveSites"], (result) => {
          const productiveSites = result.productiveSites || [];
          productiveSites.push(site);
          chrome.storage.local.set({ productiveSites });
          alert(`${site} has been added to your productive sites.`);
        });
      }
    });
  
    // Fetch leaderboard
    chrome.storage.local.get(["leaderboard"], (result) => {
      const leaderboard = result.leaderboard || [];
      leaderboardList.innerHTML = leaderboard
        .map((entry) => `<li>${entry.name}: ${entry.points} points</li>`)
        .join("");
    });
  });
  