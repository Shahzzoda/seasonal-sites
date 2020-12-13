/**
 * This file should only contain data for the New year themed Page
 */

// Add image and text for <Banner/> component
// banner_text1 and banner_text2 are supposed to break the text into two lines
// If new line is not desired you can leave one empty and use the other one
const bannerData = {
  banner_text1: "Happy",
  banner_text2: "Holidays",
  text: "Hey you! Hope you have a great holiday season this year.",
};

// Add text <LetterMessage/> component
const letterMsg = {
  greeting: "Dear Friend,",
  body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
   an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, 
   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
   Aldus PageMaker including versions of Lorem Ipsum.`,
};

// Add image and text for <MemoryLane/> component (add as many or as little as needed)
const imgTxt = [
  {
    image: "https://image.kpopmap.com/2019/10/Kim-Soohyun-cover-DPC.jpg",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting...",
  },
  {
    image: "https://6.vikiplatform.com/image/f8c6d1cc43b34859a6239da0c771d5d3.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting...",
  },
  {
    image: "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/kimsoohyun.png?itok=tiUXbSom&mtime=1581034913",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting...",
  },
  {
    image: "https://lh3.googleusercontent.com/9vvN5l6Ckbpgk_kEGNs46uFw6EzKXsbNoTqkcHATdxTBu0hYbH02YJX4hBdmZT1L6tV7Ryr8WvdCHkFbXwTK4FlkCEn13tU2=w1200-h630-rj-pp-e365",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting...",
  },
];

// Add image and text for <FarewellMessage/> component
const farewellMsg = {
  body: " For your presence this year! Wishing your love, health, and happiness.",
};

// Export all json
module.exports = { imgTxt, bannerData, letterMsg, farewellMsg };
