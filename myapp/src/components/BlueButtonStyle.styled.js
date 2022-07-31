import styled from "styled-components";
export const BlueButtonStyle = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: none;
  font-family: ${(props) => props.fonts};
  border-radius: ${(props) => props.br};
  font-size: ${(props) => props.size};
`;
