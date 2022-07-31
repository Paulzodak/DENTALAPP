import React from "react";
import { BlueButtonStyle } from "./BlueButtonStyle.styled";
const BlueButton = ({ size, fonts, br, content, bg, color, height, width }) => {
  return (
    <BlueButtonStyle
      br={br}
      bg={bg}
      width={width}
      height={height}
      fonts={fonts}
      color={color}
      size={size}
    >
      {content}
    </BlueButtonStyle>
  );
};

export default BlueButton;
