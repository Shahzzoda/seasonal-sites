# About

Virtual card for friends and family this holiday season! Includes animations, confetti, and obnoxious party horn sounds. Visuals attached below.

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
There is no step 3 !!!
Enjoy your beautiful website 🥳

# Deploy
Learn how to deploy on github [here](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)
