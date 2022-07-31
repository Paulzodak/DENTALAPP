import React from "react";
import { Cardd } from "./Card.styled";
const Card = ({
  justify,
  type,
  display,
  bg,
  children,
  margin,
  width,
  height,
  br,
  index,
}) => {
  console.log(display);
  console.log(type);
  console.log(bg);
  return (
    <Cardd
      justify={justify}
      dp={display}
      type={type}
      bg={bg}
      br={br}
      width={width}
      margin={margin}
      height={height}
      index={index}
    >
      {children}
    </Cardd>
  );
};

export default Card;
