import Timer from "./Timer";
import styled from "styled-components";

import { device } from "./../constants";

const Container = styled(Timer.Container)`
  top: 120px;
  background: linear-gradient(
    to bottom,
    rgba(128, 188, 0, 1) 0%,
    rgba(78, 161, 69, 1) 100%
  );

  @media ${device.mobileL} {
    top: 160px;
  }
`;

const Header = styled(Timer.Header)``;

const Value = styled(Timer.Value)``;

export default { Container, Header, Value };
