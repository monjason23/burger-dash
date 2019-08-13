import { animated as a } from "react-spring";
import styled from "styled-components";

const Container = styled(a.div)`
  position: absolute;
  width: 140px;
  border-radius: 4px;
  background-color: #000;
  text-align: center;
  top: 72px;
  right: 0px;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 14px;
  color: #fff;
`;

const Value = styled.span`
  text-align: center;
  display: block;
  font-size: 48px;
  color: #fff;
`;

export default { Container, Header, Value };
