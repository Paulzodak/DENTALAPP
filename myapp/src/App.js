import React from "react";
import HomePage from "./components/HOMEPAGE/HomePage";
import styled from "styled-components";
import "./App.css";
// ---------------LOGO IMPORT-------------------------------
import logo from "./components/IMAGES/Mainlogo.svg";
import logoshape from "./components/IMAGES/Logoshape.svg";
import Instagram from "./components/IMAGES/Social Icons/Instagram.svg";
import Facebook from "./components/IMAGES/Social Icons/Facebook.svg";
import Youtube from "./components/IMAGES/Social Icons/Youtube.svg";
import Twitter from "./components/IMAGES/Social Icons/Twitter.svg";
import Arrow from "./components/IMAGES/HOME/arrow.svg";

import Facebook3 from "./components/IMAGES/HOME/footer/facebook.svg";
import Twitter3 from "./components/IMAGES/HOME/footer/twitter.svg";
import Google3 from "./components/IMAGES/HOME/footer/google.svg";
import Instagram3 from "./components/IMAGES/HOME/footer/instagram.svg";
import Youtube3 from "./components/IMAGES/HOME/footer/youtube.svg";

import PhoneIcon from "./components/IMAGES/HOME/CallUtility.svg";
import StethoscopeIcon from "./components/IMAGES/HOME/StethoscopeUtility.svg";
import DoctorIcon from "./components/IMAGES/HOME/DoctorUtility.svg";
import FirstAidIcon from "./components/IMAGES/HOME/FirstAidUtility.svg";

import LogoAndShape from "./components/IMAGES/Logoandshape.svg";
// ---------------------PICTURE IMPORT----------------------
import AKASH from "./components/IMAGES/SPECIALISTS/AKASH KUMAR.svg";
import SONAM from "./components/IMAGES/SPECIALISTS/SONAM DOE.svg";
import JEMMY from "./components/IMAGES/SPECIALISTS/JEMMY DOE.svg";
import SEMENIO from "./components/IMAGES/SPECIALISTS/SEMENIO DOE.svg";
import Facebook2 from "./components/IMAGES/HOME/facebook.svg";
import Twitter2 from "./components/IMAGES/HOME/twitter.svg";
import Instagram2 from "./components/IMAGES/HOME/instagram.svg";

//---------------BLOG PICTURES-------------------
import Image1 from "./components/IMAGES/BLOG/Image1.svg";
import Image2 from "./components/IMAGES/BLOG/Image2.svg";
import Image3 from "./components/IMAGES/BLOG/Image3.svg";
import LikeIcon from "./components/IMAGES/BLOG/Icon/heart-2.svg";
import CommentIcon from "./components/IMAGES/BLOG/Icon/chat-46.svg";

import ImageCardOne from "./components/IMAGES/ImageCardOne.svg";
import ImageCardTwo from "./components/IMAGES/homepageimage2.svg";
const App = () => {
  const NavBarItems = {
    section1: ["About", "Blog", "Doctor", "Contact"],
    section2: { logo: logo, logoshape: logoshape },
    section3: [Instagram, Facebook, Youtube, Twitter],
  };
  const ColorStyles = {
    mainBlue: "#0096ff",
    lightGrey: "#F0F6FB",
  };
  const ImageCards = {
    CardOne: ImageCardOne,
    CardTwo: ImageCardTwo,
  };
  const SectionOneTexts = {
    h1: "Welcome to Dental Clinic",
    h2: "Professional,Warm and friendly Dental care for you",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    button: "Make Appointment",
  };
  const PreSectionText = {
    h1: "Get in touch with us today (02) 9955 4239",
  };
  const fonts = {
    main: '"Manrope", sans-serif',
  };
  const services = [
    {
      h1: "Teeth Testing",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: PhoneIcon,
    },
    {
      h1: "Teeth Testing",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: StethoscopeIcon,
    },
    {
      h1: "Teeth Testing",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: DoctorIcon,
    },
    {
      h1: "Teeth Testing",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: FirstAidIcon,
    },
  ];
  const Text4 = {
    mainheading: "RELAX YOUR DENTIST KNOWS BEST",
    contents: [
      {
        h1: "Dental hygiene never forget!",
        p: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      },
      {
        h1: "Don’t rush when you brush!",
        p: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      },
      {
        h1: "Visit your dentist once in 6 months",
        p: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      },
    ],
  };
  const Text5 = {
    icon: Arrow,
    heading: "Our Umbrella of Services",
    subheading: "Pain free procedures in dentistry",
    content: [
      {
        h1: "Teeth Whitening",
        p: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
      },
      {
        h1: "Teeth Cleaning",
        p: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
      },
      {
        h1: "Modern Anesthetic",
        p: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
      },
      {
        h1: "Quality Brackets",
        p: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
      },
      {
        h1: "Teeth Whitening",
        p: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
      },
      {
        h1: "Teeth Cleaning",
        p: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
      },
    ],
  };
  const Text6 = {
    heading: "Our Distinguished Dental Specialists",
    content: [
      { picture: AKASH, name: "AKASH KUMAR", job: "DENTIST" },
      { picture: SONAM, name: "SONAM DOE", job: "DENTIST" },
      { picture: JEMMY, name: "JEMMY DOE", job: "DENTIST" },
      { picture: SEMENIO, name: "SEMENIO DOE", job: "DENTIST" },
    ],
    icon1: Facebook2,
    icon2: Twitter2,
    icon3: Instagram2,
  };

  const comments1 = Math.trunc(Math.random() * 100);
  const comments2 = Math.trunc(Math.random() * 100);
  const comments3 = Math.trunc(Math.random() * 100);
  const likes1 = Math.trunc(Math.random(5) * 10);
  const likes2 = Math.trunc(Math.random(5) * 10);
  const likes3 = Math.trunc(Math.random(5) * 10);
  const owner = "By Akash";
  const Date = "27 sep 2020";
  const Text8 = {
    heading: "Our Blog",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    contents: [
      {
        h1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        p: "Your bedroom is where you begin and end every day, and when it’s styled just how you like it, it can set the perfect tone. Whether you’re making a few easy updates or starting fresh ... ",
        image: Image1,
        by: owner,
        date: Date,
        comments: comments1,
        likes: likes1,
        CommentIcon: CommentIcon,
        LikeIcon: LikeIcon,
      },
      {
        h1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        p: "Your bedroom is where you begin and end every day, and when it’s styled just how you like it, it can set the perfect tone. Whether you’re making a few easy updates or starting fresh ... ",
        image: Image2,
        by: owner,
        date: Date,
        comments: comments2,
        likes: likes2,
        CommentIcon: CommentIcon,
        LikeIcon: LikeIcon,
      },
      {
        h1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        p: "Your bedroom is where you begin and end every day, and when it’s styled just how you like it, it can set the perfect tone. Whether you’re making a few easy updates or starting fresh ... ",
        image: Image3,
        by: owner,
        date: Date,
        comments: comments3,
        likes: likes3,
        CommentIcon: CommentIcon,
        LikeIcon: LikeIcon,
      },
    ],
  };

  const Text9 = {
    section1: [
      LogoAndShape,
      "About Us",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ],
    section2: [
      "Business hours :",
      "Monday to Saturday 9:30 am - 4:30 pm",
      "Address:",
      "A-67 south Ex Delhi-11002",
      "Email:",
      "abc@abc.com",
      "Phone:",
      "1800 - 458495-4455",
    ],
    section3: {
      h1: "Stay Connected",
      content: ["Facebook", "Twitter", "Google", "Instagram", "Youtube"],
      images: [Facebook3, Instagram3, Youtube3, Google3, Twitter3],
    },
    section4: {
      h1: "Newsletter",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  };
  return (
    <div>
      <HomePage
        fonts={fonts}
        SectionOneTexts={SectionOneTexts}
        styled={styled}
        NavBarItems={NavBarItems}
        ColorStyles={ColorStyles}
        ImageCards={ImageCards}
        PreSectionText={PreSectionText}
        services={services}
        Text4={Text4}
        Text5={Text5}
        Text6={Text6}
        Text8={Text8}
        Text9={Text9}
      />
    </div>
  );
};

export default App;
