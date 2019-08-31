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
  z-index: 11;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.tablet} {
    padding: 8px;
  }
`;

const Item = styled(a.div)`
  position: relative;
  width: 72px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  img {
    will-change: transform;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
  }
`;

const ItemMobileDragHandler = styled.div`
  position: relative;
  will-change: transform;

  img {
    transform: scale(1);
    will-change: transform;
    pointer-events: none;

    &.zoom {
      transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transform: scale(6);
      pointer-events: none;
    }
  }
`;

export default { Container, Item, ItemMobileDragHandler };
