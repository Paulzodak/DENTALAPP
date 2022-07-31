import styled from "styled-components";
export const Cardd = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: 1px solid red;
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  box-sizing: border-box;
  display: ${(props) => props.dp};
  justify-content: ${(props) => props.justify};
  grid-template-columns: ${(props) => props.type};
  border-radius: ${(props) => props.br};
  z-index: ${(props) => props.index};
`;
