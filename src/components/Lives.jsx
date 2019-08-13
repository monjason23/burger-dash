import styled from "styled-components";
import { animated as a } from "react-spring";

const Container = styled(a.div)`
  position: absolute;
  display: flex;
  right: 0;
  background-color: #fff;
`;

const Heart = styled(a.div)`
  position: relative;
`;

export default { Container, Heart };
