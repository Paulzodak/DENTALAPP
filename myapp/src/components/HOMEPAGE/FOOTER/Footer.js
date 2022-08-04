import React from "react";
import Card from "../../Card";
import { ImageCardStyle } from "../../ImageCard.styled";
import { Header } from "../SECTIONONE/Header.styled";
import { HeaderLink } from "../SECTIONONE/HeaderLink.styled";
const Footer = ({ Text9, ColorStyles }) => {
  const renderedContents = Text9.section3.content.map((index) => {
    return (
      <Card>
        <ImageCardStyle src={index.images} />
        <Header size={"0.5rem"}>{Text9.section3.content[0]}</Header>
      </Card>
    );
  });
  return (
    <Card
      display={"grid"}
      type={"22% 20% 12% 15%"}
      justify={"space-evenly"}
      bg={ColorStyles.mainBlue}
      height={"9rem"}
    >
      <Card>
        <Card display={"grid"} height={"70%"} margin={"15% 0%"}>
          <ImageCardStyle src={Text9.section1[0]} />
          <Header color={"white"} size={"0.5rem"}>
            {Text9.section1[1]}
          </Header>
          <Header color={"white"} size={"0.4rem"}>
            {Text9.section1[2]}
          </Header>
        </Card>
      </Card>
      <Card>
        <Card display={"grid"} height={"80%"} margin={"15% 0%"}>
          <Card>
            <Header color={"white"} size={"0.5rem"}>
              {Text9.section2[0]}
            </Header>
            <Header color={"white"} size={"0.4rem"}>
              {Text9.section2[1]}
            </Header>
          </Card>
          <Card>
            <Header color={"white"} size={"0.5rem"}>
              {Text9.section2[2]}
            </Header>
            <Header color={"white"} size={"0.4rem"}>
              {Text9.section2[3]}
            </Header>
          </Card>
          <Card>
            <Header color={"white"} size={"0.5rem"}>
              {Text9.section2[3]}
            </Header>
            <Header color={"white"} size={"0.4rem"}>
              {Text9.section2[4]}
            </Header>
          </Card>
          <Card>
            <Header color={"white"} size={"0.5rem"}>
              {Text9.section2[6]}
            </Header>
            <Header color={"white"} size={"0.4rem"}>
              {Text9.section2[7]}
            </Header>
          </Card>
        </Card>
      </Card>
      <Card>
        <Card height={"80%"} margin={"15% 0%"}>
          <Header size={"0.6rem"}>{Text9.section3.h1}</Header>
          <Card display={"grid"} height={"80%"} margin={"15% 0%"}>
            {renderedContents}
          </Card>
        </Card>
      </Card>
      <Card></Card>
    </Card>
  );
};

export default Footer;
