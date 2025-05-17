import logo1 from "./logo.svg";
import logo2 from "./logo.png";
import logo3 from "./logo3.png";
import herosection from "./herosection_image.jpg";
import logo_icon from "./logo_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import header_img from "./header_img.png";
import remove_bg_icon from "./remove_bg_icon.svg";
import upload_btn_icon from "./upload_btn_icon.svg";
import upload_icon from "./upload_icon.svg";
import download_icon from "./download_icon.svg";
import image_w_bg from "./image_w_bg.png";
import image_wo_bg from "./image_wo_bg.png";
import facebook_icon from "./facebook_icon.svg";
import google_plus_icon from "./google_plus_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import credit_icon from "./credit_icon.png";

export const assets = {
  herosection,
  logo1,
  logo2,
  logo3,
  logo_icon,
  arrow_icon,
  header_img,
  remove_bg_icon,
  upload_icon,
  download_icon,
  image_w_bg,
  image_wo_bg,
  facebook_icon,
  google_plus_icon,
  twitter_icon,
  upload_btn_icon,
  credit_icon,
};

export const testimonialsData = [
  {
    id: 1,
    text: "I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    author: "Richard Nelson",
    image: profile_img_1,
    jobTitle: "Web Developer",
  },
  {
    id: 2,
    text: "I've been using bg.removal for nearly 6 months, I had a fantastic experience. The quality is top-notch. I recommend others to try this app.",
    author: "Donald Jackman",
    image: profile_img_2,
    jobTitle: "UI Deginer",
  },
];

export const plans = [
  {
    id: "Basic",
    price: 15,
    credits: 2,
    desc: "Best for quick, one-off tasks like profile or product pictures. Get fast, affordable background removal with this entry-level plan.",
    isUnlimited: false,
  },
  {
    id: "Standard",
    price: 19,
    credits: 4,
    desc: "Designed for small businesses and content creators. Process more images while keeping your visuals clean and professional.",
    isUnlimited: false,
  },
  {
    id: "Premium",
    price: 49,
    credits: 10,
    desc: "Ideal for professionals and online sellers. A cost-effective solution for handling background removal in bulk.",
    isUnlimited: false,
  },
  {
    id: "Pro",
    price: 250,
    credits: "unlimited/month",
    desc: "Unlimited access for agencies and e-commerce power users. Handle high volumes without worrying about limits or extra charges.",
    isUnlimited: true,
  },
];

