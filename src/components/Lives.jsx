import styled from "styled-components";
import { animated as a } from "react-spring";

const Container = styled(a.div)`
  position: absolute;
  display: flex;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  flex-direction: row-reverse;
  right: 8px;
  top: 8px;
  background-color: #fff;
  z-index: 10;
  padding: 2px 4px;
  border-radius: 8px;
`;

const Heart = styled(a.div)`
  position: relative;
  transform-origin: center center;
  img {
    margin: 0px 12px;
    box-sizing: border-box;
    width: 24px;
  }
`;

export default { Container, Heart };
