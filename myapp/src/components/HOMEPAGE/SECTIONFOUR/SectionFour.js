import React from "react";
import Card from "../../Card";
import { Header } from "../SECTIONONE/Header.styled";
import { ImageCardStyle } from "../../ImageCard.styled";
const SectionFour = ({ Text6 }) => {
  const rendenderedContents = Text6.content.map((item) => {
    return (
      <Card>
        <ImageCardStyle width={"100%"} src={item.picture} />
        <Card height={"3rem"}>
          <Header margin={"0.3rem 0"} align={"center"} size={"0.6rem"}>
            {item.name}
          </Header>
          <Header margin={"0.3rem 0"} align={"center"} size={"0.4rem"}>
            {item.job}
          </Header>
          <Card
            display={"grid"}
            justify={"center"}
            type={"1rem 1rem 1rem"}
            height={"1rem"}
          >
            <ImageCardStyle
              widthh={"0.5rem"}
              heightt={"0.5rem"}
              src={Text6.icon1}
            />
            <ImageCardStyle
              widthh={"0.5rem"}
              heightt={"0.5rem"}
              src={Text6.icon2}
            />
            <ImageCardStyle
              widthh={"0.5rem"}
              heightt={"0.5rem"}
              src={Text6.icon3}
            />
          </Card>
        </Card>
      </Card>
    );
  });
  return (
    <Card width={"100%"} height={"20rem"}>
      <Card margin={"1rem auto"} width={"16rem"}>
        <Header>{Text6.heading}</Header>
      </Card>
      <Card
        display={"grid"}
        type={"22% 22% 22% 22%"}
        justify={"space-between"}
        margin={"0rem 4rem"}
        height={"12rem"}
      >
        {rendenderedContents}
      </Card>
    </Card>
  );
};

export default SectionFour;
