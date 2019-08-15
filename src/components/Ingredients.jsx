import { animated as a } from "react-spring";
import styled from "styled-components";

import { device } from "./../constants";

const Container = styled.div`
  position: absolute;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: #fff;
  display: flex;
  padding: 8px 8px 24px 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  width: 100%;
  max-width: max-content;

  flex-wrap: wrap;
  justify-content: center;

  @media ${device.tablet} {
    padding: 8px;
  }
`;

const Item = styled(a.div)`
  position: relative;
  width: 64px;
  border-radius: 8px;
  padding: 8px;
`;

export default { Container, Item };
