import styled from "styled-components";
export const Container = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.type2};
  grid-template-columns: ${(props) => props.type};
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  /* border: 1px solid red; */
  font-family: ${(props) => props.fonts};
`;
