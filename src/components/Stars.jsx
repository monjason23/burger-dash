import styled from "styled-components";

import { animated as a } from "react-spring";

const Container = styled(a.div)`
  position: absolute;
  z-index: 100;
  bottom: 300px;
  width: 100px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`;

const Star = styled(a.div)`
  position: absolute;

  img {
    width: 100px;
    will-change: animation;
    animation: ${props =>
      `App-logo-spin infinite ${props.duration || 5}s linear`};
  }
`;

export default { Container, Star };
