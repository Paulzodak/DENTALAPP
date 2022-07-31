import styled from "styled-components";
export const BlueCircleStyle = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  position: absolute;
  top: -3rem;
  right: -3rem;
  z-index: -20;
`;
