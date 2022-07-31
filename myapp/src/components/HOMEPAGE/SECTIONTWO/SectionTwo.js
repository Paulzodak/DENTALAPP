import React from "react";
import Card from "../../Card";
import { ImageCardStyle } from "../../ImageCard.styled";
import { Header } from "../SECTIONONE/Header.styled";
import { Circle } from "../../Circle.styled";
const SectionTwo = ({ Text4, services, ColorStyles, ImageCards }) => {
  const renderedContents = Text4.contents.map((item) => {
    return (
      <>
        <Header
          color={ColorStyles.mainBlue}
          size={"0.5rem"}
          margin={"1rem 0 0.2rem 0"}
        >
          {item.h1}
        </Header>
        <Header size={"0.35rem"}>{item.p}</Header>
      </>
    );
  });
  const renderedServices = services.map((item) => {
    return (
      <Card
        margin={"auto 0rem"}
        height={"4.5rem"}
        width={"7rem"}
        bg={ColorStyles.mainBlue}
        br={"0.42rem"}
      >
        <ImageCardStyle
          float={"right"}
          heightt={"2rem"}
          widthh={"2rem"}
          src={item.icon}
          padding={"0.5rem 1rem"}
        />
        <Header
          color={"white"}
          size={"0.4rem"}
          margin={"2.5rem 0.4rem 0rem 0.4rem"}
        >
          {item.h1}
        </Header>
        <Header
          color={"white"}
          size={"0.35rem"}
          margin={"0.2rem 0.2rem 0rem 0.4rem"}
        >
          {item.p}
        </Header>
      </Card>
    );
  });
  console.log(services);

  return (
    <Card height={"30rem"}>
      <Card
        margin={"2rem auto"}
        type={"auto auto auto auto"}
        display={"grid"}
        height={"7rem"}
        width={"36rem"}
        justify={"space-evenly"}
      >
        {renderedServices}
      </Card>
      <Circle
        bg={"#F1F1F1"}
        height={"13rem"}
        width={"13rem"}
        br={"10rem"}
        margin={"0rem 33%"}
        position={"absolute"}
        index={"-10"}
      />
      <ImageCardStyle
        position={"absolute"}
        widthh={"18rem"}
        heighth={"18rem"}
        margin={"1rem 0 0 4rem"}
        src={ImageCards.CardTwo}
      />
      <Card
        position={"relative"}
        height={"10rem"}
        width={"14rem"}
        margin={"4rem 0 0 22rem"}
        index={"20"}
      >
        <Header size={"0.5rem"}>{Text4.mainheading}</Header>
        <>{renderedContents}</>
      </Card>
    </Card>
  );
};

export default SectionTwo;
