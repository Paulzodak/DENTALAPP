import styled from "styled-components";
export const ImageCardStyle = styled.img`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  width: ${(props) => props.widthh};
  height: ${(props) => props.heightt};
  float: ${(props) => props.float};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  transition: ${(props) => props.transition};
`;
