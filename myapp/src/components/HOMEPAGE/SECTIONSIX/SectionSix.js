import React from "react";
import Card from "../../Card";
import { Header } from "../SECTIONONE/Header.styled";
import { ImageCardStyle } from "../../ImageCard.styled";
const SectionSix = ({ Text8 }) => {
  const rendenderedContents = Text8.contents.map((item) => {
    return (
      <Card height={"100%"}>
        <ImageCardStyle width={"100%"} src={item.image} />
        <Card height={"0.5rem"} display={"grid"} type={"auto auto auto auto"}>
          <Card width={"2rem"} height="100%">
            <Header size={"0.3rem"}>{item.by}</Header>
          </Card>
          <Card width={"4rem"} height="100%">
            <Header size={"0.3rem"}>{item.date}</Header>
          </Card>
          <Card
            display={"grid"}
            type={"auto auto"}
            width={"4rem"}
            height="100%"
          >
            <ImageCardStyle src={item.CommentIcon} />
            <Header size={"0.3rem"}>{item.comments}</Header>
          </Card>
          <Card
            display={"grid"}
            type={"auto auto"}
            width={"4rem"}
            height="100%"
          >
            <ImageCardStyle src={item.LikesIcon} />
            <Header size={"0.3rem"}>{item.likes}</Header>
          </Card>
        </Card>
      </Card>
    );
  });
  return (
    <Card height={"20rem"}>
      <Header margin={"1rem auto"} align={"center"}>
        {Text8.heading}
      </Header>
      <Card margin={"0rem auto"} width={"16rem"}>
        <Header size={"0.5rem"} align={"center"}>
          {Text8.p}
        </Header>
      </Card>
      <Card
        display={"grid"}
        type={"30% 30% 30%"}
        height={"10rem"}
        margin={"1rem 4rem"}
        justify={"space-between"}
      >
        {rendenderedContents}
      </Card>
    </Card>
  );
};

export default SectionSix;
