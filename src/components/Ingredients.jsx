import { animated as a } from "react-spring";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  padding: 8px;
  width: 300px;
`;

const Item = styled(a.div)`
  position: relative;
  width: 64px;
  border-radius: 8px;
  padding: 8px;
`;

export default { Container, Item };
