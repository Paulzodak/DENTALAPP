import React from "react";
// ----------------COMPONENT IMPORT------------------------
import NavBar from "./NavBar/NavBar";
import SectionOne from "./SECTIONONE/SectionOne";
import SectionTwo from "./SECTIONTWO/SectionTwo";
import SectionThree from "./SECTIONTHREE/SectionThree";
import SectionFour from "./SECTIONFOUR/SectionFour";
import SectionSix from "./SECTIONSIX/SectionSix";
import Footer from "./FOOTER/Footer";
// ---------------LOGO IMPORT-------------------------------
// import logo from "../IMAGES/Mainlogo.svg";
// import logoshape from "../IMAGES/Logoshape.svg";
// import Instagram from "../IMAGES/Social Icons/Instagram.svg";
// import Facebook from "../IMAGES/Social Icons/Facebook.svg";
// import Youtube from "../IMAGES/Social Icons/Youtube.svg";
// import Twitter from "../IMAGES/Social Icons/Twitter.svg";
import { HomePageStyle } from "./HomePageStyle.styled";
import Card from "../Card";
import { Header } from "./SECTIONONE/Header.styled";
import styled from "styled-components";
const HomePage = ({
  SectionOneTexts,
  ImageCards,
  NavBarItems,
  styled,
  ColorStyles,
  fonts,
  PreSectionText,
  services,
  Text4,
  Text5,
  Text6,
  Text8,
  Text9,
}) => {
  return (
    <HomePageStyle>
      <NavBar fonts={fonts} styled={styled} NavBarItems={NavBarItems}></NavBar>
      <SectionOne
        fonts={fonts}
        ImageCards={ImageCards}
        ColorStyles={ColorStyles}
        SectionOneTexts={SectionOneTexts}
      />
      <Card height={"3rem"} bg={ColorStyles.lightGrey} margin={"0rem 0rem"}>
        <Header
          padding={"1rem 0rem"}
          margin={"0rem 6rem"}
          color={ColorStyles.mainBlue}
        >
          <center>{PreSectionText.h1}</center>
        </Header>
      </Card>
      <SectionTwo
        ColorStyles={ColorStyles}
        services={services}
        ImageCards={ImageCards}
        Text4={Text4}
      />
      <SectionThree fonts={fonts} ColorStyles={ColorStyles} Text5={Text5} />
      <SectionFour ColorStyles={ColorStyles} Text6={Text6} />
      <SectionSix Text8={Text8} />
      <Footer Text9={Text9} ColorStyles={ColorStyles} />
    </HomePageStyle>
  );
};

export default HomePage;
