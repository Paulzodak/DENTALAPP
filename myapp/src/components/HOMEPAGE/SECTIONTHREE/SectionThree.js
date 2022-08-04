import React from "react";
import { Item } from "semantic-ui-react";
import { useState } from "react";
import Card from "../../Card";
import { HeaderLink } from "../SECTIONONE/HeaderLink.styled";
import { Header } from "../SECTIONONE/Header.styled";
import { ImageCardStyle } from "../../ImageCard.styled";
const SectionThree = ({ fonts, ColorStyles, Text5 }) => {
  const [arrowMargin, setArrowMargin] = useState("0rem 0.3rem");
  const Overhandler = () => {
    setArrowMargin("0rem 0.5rem");
  };
  const Overouthandler = () => {
    setArrowMargin("0rem 0.3rem");
  };
  const rendenderedContents = Text5.content.map((item) => {
    return (
      <>
        <Card margin={"1rem 0rem"}>
          <Header fonts={fonts.main} margin={"0.5rem 0rem"} size={"0.8rem"}>
            {item.h1}
          </Header>
          <Header fonts={fonts.main} margin={"0.5rem 0rem"} size={"0.4rem"}>
            {item.p}
          </Header>
          <Card margin={"1rem 0rem"}>
            <Header
              fonts={fonts.main}
              color={ColorStyles.mainBlue}
              size={"0.5rem"}
              dp={"inline"}
            >
              Explore
            </Header>
            <ImageCardStyle
              heightt={"0.3rem"}
              widthh={"0.3rem"}
              margin={"0rem 0.3rem"}
              src={Text5.icon}
            />
          </Card>
        </Card>
      </>
    );
  });

  return (
    <Card width={"100%"} height={"25rem"}>
      <Card width={"11rem"} margin={"0.5rem auto"}>
        <Header width={"5rem"} margin={"auto"}>
          {Text5.heading}
        </Header>
      </Card>

      <Card width={"14rem"} margin={"0.5rem auto"}>
        <Header>{Text5.subheading}</Header>
      </Card>
      <Card
        justify={"space-between"}
        margin={"0rem 4rem"}
        display={"grid"}
        type={"22% 22% 22%"}
      >
        {rendenderedContents}
      </Card>
      <Card width={"5rem"} margin={"1rem auto"}>
        <HeaderLink
          href="#"
          onMouseLeave={Overouthandler}
          onMouseOver={Overhandler}
        >
          <Header
            fonts={fonts.main}
            color={ColorStyles.mainBlue}
            size={"0.7rem"}
            dp={"inline"}
          >
            Explore all
          </Header>
          <ImageCardStyle
            heightt={"0.5rem"}
            widthh={"0.5rem"}
            margin={arrowMargin}
            src={Text5.icon}
            transition={"0.2s"}
          />
        </HeaderLink>
      </Card>
    </Card>
  );
};

export default SectionThree;
