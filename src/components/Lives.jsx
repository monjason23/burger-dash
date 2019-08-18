import styled from "styled-components";
import { animated as a } from "react-spring";

const Container = styled(a.div)`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  right: 8px;
  top: 8px;

  z-index: 10;
  padding: 2px 4px;
`;

const Heart = styled(a.div)`
  position: relative;
  transform-origin: center center;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin: 0px 8px;

  img {
    box-sizing: border-box;
    width: 12px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export default { Container, Heart };
