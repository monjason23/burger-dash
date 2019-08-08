import { animated as a } from "react-spring";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 200px;
  display: flex;
  flex-direction: column;
  top: 72px;
  left: 0px;
`;

const Item = styled(a.div)`
  height: 40px;
  border-radius: 8px;
  color: #fff;
  line-height: 40px;
  padding-left: 16px;
  position: relative;
  background-color: #000;
  margin: 0px;
  overflow: visible;
`;

const Count = styled.span`
  position: absolute;
  right: 16px;
`;

export default { Container, Item, Count };
