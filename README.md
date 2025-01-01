# Gamified Habit Tracker

**Gamified Habit Tracker** is a Chrome extension designed to boost productivity by turning your browsing habits into a game. Earn points, unlock achievements, and compete with friends while staying productive and blocking distractions!

---

## Features

1. **Track Productive Sites**:
   - Earn points for visiting sites that boost your productivity.
   
2. **Block Distracting Sites**:
   - Prevent access to distracting websites and stay focused on your goals.

3. **Gamification**:
   - Gain points for productive activities.
   - Unlock achievements and milestones.

4. **Customizable**:
   - Add productive and blocked sites as per your preferences.

---


## Directory Structure

```
├── icons/
│   ├── icon.png
├── manifest.json
├── popup.html
├── popup.js
├── background.js
├── styles.css
└── README.md
```

---

## Usage

1. **Open the Extension**:
   - Click the extension icon in your browser toolbar.

2. **Track Points**:
   - View your current points and progress.

3. **Add Productive Sites**:
   - Add URLs of websites you want to reward yourself for visiting.

4. **Block Distracting Sites**:
   - Add URLs of websites you want to block.

5. **View Leaderboard**:
   - Check your rank and compete with yourself or friends.

---

## How It Works

1. **Background Script**:
   - Monitors the user's browsing habits.
   - Adds points for visiting productive sites.
   - Blocks access to distracting sites.

2. **Popup Script**:
   - Allows users to add productive and distracting sites.
   - Displays points and achievements.

3. **Storage**:
   - Uses Chrome's local storage to save data (e.g., points, sites, leaderboard).

---

## Technologies Used

- **HTML**: Popup UI
- **CSS**: Styling
- **JavaScript**: Logic for popup and background scripts
- **Chrome APIs**:
  - `storage`
  - `tabs`
  - `alarms`
  - `runtime`

---

## Demo Video

Here is a demo of the **Gamified Habit Tracker** Chrome extension in action:

<video width="500" controls>
  <source src="Working.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>




---

## Future Enhancements

1. **Global Leaderboard**:
   - Sync leaderboard across users with a backend (e.g., Firebase).

2. **Advanced Gamification**:
   - Add badges, streaks, and more detailed achievements.

3. **Time Tracking**:
   - Monitor time spent on productive vs. distracting sites.

4. **Custom Themes**:
   - Allow users to personalize the extension's look and feel.

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes or improvements.

---



