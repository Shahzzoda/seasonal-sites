# About

Holiday cards are outdated, limited in customization and space, and will take weeks to send if you're not with your family and friends this season. Virtual cards, aka seasonal sites, are expressive, customizable, and much more festive. You can make one for friends and family this holiday season! These sites are intended to be as obnoxious as possible with animations, confetti, party horn sounds, bold fonts, and a place to attach your cheesy pictures for a good ole visit down memory lane.

There's two versions out right now:

- Christmas Version - [Link](https://new-year-site.web.app/) <img src="https://freepngimg.com/download/christmas/26196-6-christmas-stocking.png" width="30" align="center">

- New Years Eve Version - [Link](https://christmas-site.web.app/) <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dqj6A2VfPLyXHuTGCnXcrt5I0jIhfR2NBQ&usqp=CAU" width="30" align="center">

Every text and image is customizable. With these templates, you can add your own content and deploy.

# Pre-reqs:

1. npm
2. Github account (to download and host)
3. Some programming knowledge to dig around and debug in case something goes wrong.

# What to change <img src="https://media.giphy.com/media/6vj5quVNRhoQw/giphy.gif" align="right" width="100">

To choose theme, simply toggle `theme` variable in `themeConfig.js` file.<br/>
⚠️ Warning: Make sure to set the value of `theme` exactly as specified ⚠️

Example code:

```javascript
const theme = "Christmas" || "New Year";
```

---

To add pictures and text, change the value of the `vars` in `NewYearPageData.js || ChristmasPageData.js` file. You'll find them in `./src/Data` directory. (For better understanding, read the comments above each `var`)

Example code:

```javascript
const imgTxt = [
  {
    image: `picture1.jpg`,
    text: `It has survived not only five centuries, but also the leap into electronic typesetting...`,
  },
  {
    image: `picture2.png`,
    text: `It has survived not only five centuries, but also the leap into electronic typesetting...`,
  },
];

const bannerData = {
  image: `banner.png`,
  text: `Hey you! Hope you have a great holiday season this year.`,
};

const farewellMsg = {
  image: `goodbye.png`,
  body: ` For your presence this year! Wishing your love, health, and
  happiness.`,
};
```

# How to Run

##### Step 1:

Run `npm install` in parent directory to download all required packages 📦

##### Step 2:

Run `npm start` in parent directory to launch app 🚀

##### Step 3:

Deploy on github [here](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) -- or anywhere else you prefer :D
