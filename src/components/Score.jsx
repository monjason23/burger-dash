import Timer from "./Timer";
import styled from "styled-components";

const Container = styled(Timer.Container)`
  top: 180px;
  background: linear-gradient(
    to bottom,
    rgba(128, 188, 0, 1) 0%,
    rgba(78, 161, 69, 1) 100%
  );
`;

const Header = styled(Timer.Header)``;

const Value = styled(Timer.Value)``;

export default { Container, Header, Value };
