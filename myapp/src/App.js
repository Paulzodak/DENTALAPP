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

import PhoneIcon from "./components/IMAGES/HOME/CallUtility.svg";
import StethoscopeIcon from "./components/IMAGES/HOME/StethoscopeUtility.svg";
import DoctorIcon from "./components/IMAGES/HOME/DoctorUtility.svg";
import FirstAidIcon from "./components/IMAGES/HOME/FirstAidUtility.svg";

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
      />
    </div>
  );
};

export default App;
