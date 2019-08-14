import { animated as a } from "react-spring";
import styled from "styled-components";

const Container = styled(a.div)`
  position: absolute;
  width: 140px;
  border-radius: 8px;
  background-color: #000;
  text-align: center;
  top: 72px;
  right: 16px;
  background: linear-gradient(
    to bottom,
    rgba(255, 158, 0, 1) 0%,
    rgba(253, 114, 0, 1) 100%
  );
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

const Header = styled.h1`
  text-align: center;
  font-size: 14px;
  color: #fff;
`;

const Value = styled(a.span)`
  text-align: center;
  display: block;
  font-size: 48px;
  color: #fff;
  padding-bottom: 8px;
`;

export default { Container, Header, Value };
