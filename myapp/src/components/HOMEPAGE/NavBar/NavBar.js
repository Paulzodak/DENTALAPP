import React from "react";
import { Container } from "./Container.styled.js";
import { NavBarr } from "./NavBar.styled.js";
import { Image } from "./Image.styled";

const NavBar = ({ fonts, NavBarItems }) => {
  const sectionone = NavBarItems.section1.map((items) => {
    return <div>{items}</div>;
  });
  const renderedSocialIcons = NavBarItems.section3.map((items) => {
    return (
      <Image
        src={items}
        margin={"0.3rem 0rem"}
        height={"1rem"}
        width={"1rem"}
      ></Image>
    );
  });
  return (
    <>
      <NavBarr bg={"white"}>
        <Container
          display={"grid"}
          type={"auto auto auto auto"}
          type2={"center"}
          size={"0.4rem"}
          padding={"0.5rem"}
          gap={"1.5rem"}
          fonts={fonts.main}
        >
          {sectionone}
        </Container>
        <Container margin={"auto"}>
          <Image
            height={"1rem"}
            width={"1rem"}
            src={NavBarItems.section2.logo}
            margin={"0.3rem 0rem 0rem 0rem"}
          />
          <Image
            height={"0.7rem"}
            width={"3rem"}
            margin={"0.1rem 0.2rem"}
            src={NavBarItems.section2.logoshape}
          />
        </Container>
        <Container
          gap={"0.5rem"}
          type2={"center"}
          type={"auto auto auto auto"}
          display={"grid"}
        >
          {renderedSocialIcons}
        </Container>
      </NavBarr>
    </>
  );
};

export default NavBar;
