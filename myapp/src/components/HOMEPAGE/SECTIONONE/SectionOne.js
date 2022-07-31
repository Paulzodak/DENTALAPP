import React from "react";
import Card from "../../Card.js";
import { ImageCardStyle } from "../../ImageCard.styled";
import { BlueCircleStyle } from "./BlueCircleStyle.styled";
import { Header } from "./Header.styled.js";
import BlueButton from "../../BlueButton.js";
const SectionOne = ({ fonts, SectionOneTexts, ImageCards, ColorStyles }) => {
  return (
    <>
      <Card width={"100%"} height={"20rem"}>
        <BlueCircleStyle color={ColorStyles.mainBlue} />
        <ImageCardStyle
          src={ImageCards.CardOne}
          position={"absolute"}
          top={"1.4rem"}
          right={"1.2rem"}
          widthh={"18rem"}
          heightt={"18rem"}
        />
        <Card width={"17rem"} height={"9rem"} margin={"4rem 3rem"}>
          <Header
            color={ColorStyles.mainBlue}
            weight={"thin"}
            fonts={fonts.main}
            size={"0.7rem"}
            margin={"0.5rem 0rem"}
          >
            {SectionOneTexts.h1}
          </Header>
          <Header
            color={"black"}
            weight={"thin"}
            fonts={fonts.main}
            lh={"1.3rem"}
            size={"1.3rem"}
            margin={"0.5rem 0rem"}
          >
            {SectionOneTexts.h2}
          </Header>
          <Header
            color={"black"}
            weight={"thin"}
            fonts={fonts.main}
            size={"0.5rem"}
            margin={"0.5rem 0rem"}
          >
            {SectionOneTexts.p}
          </Header>
          <BlueButton
            bg={ColorStyles.mainBlue}
            color={"white"}
            height={"1.4rem"}
            width={"5rem"}
            content={SectionOneTexts.button}
            br={"0.25rem"}
            size={"0.4rem"}
            fonts={fonts.main}
          ></BlueButton>
        </Card>
      </Card>
    </>
  );
};

export default SectionOne;
