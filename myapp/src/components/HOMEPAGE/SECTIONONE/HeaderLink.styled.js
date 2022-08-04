import styled from "styled-components";
export const HeaderLink = styled.a`
  font-size: ${(props) => props.size};
  font-family: ${(props) => props.fonts};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  display: ${(props) => props.dp};
  text-align: ${(props) => props.align};
  text-decoration: none;
`;
