import styled from "styled-components";
export const NavBarr = styled.div`
  display: grid;
  border-bottom: 1.5px solid rgb(234, 234, 234);
  width: 100vw;
  height: 1.5rem;
  background-color: ${(props) => props.bg};
  grid-template-columns: 40% 25% 35%;
  position: relative;
  z-index: +20;
`;
