import styled from "styled-components";
export const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  /* border: 1px solid red; */
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  /* display: ${(props) => props.display};
  grid-template-columns: ${(props) => props.type};
  gap: ${(props) => props.gap}; */
`;
