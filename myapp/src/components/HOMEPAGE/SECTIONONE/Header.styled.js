import styled from "styled-components";
export const Header = styled.div`
  font-size: ${(props) => props.size};
  font-family: ${(props) => props.fonts};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
`;
