import styled from "styled-components";
export const Circle = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.br};
  z-index: ${(props) => props.index};
`;
