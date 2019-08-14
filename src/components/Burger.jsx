import React from "react";
import styled from "styled-components";

import { useSpring, config, animated as a } from "react-spring";

import BottomBun from "../img/BottomBun.svg";
import TopBun from "../img/TopBun.svg";

const BurgerContainer = styled(a.div)`
  position: absolute;
  bottom: 80px;
  width: 310px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IngredientsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 350px;
`;

const Ingredient = styled(a.li)`
  position: relative;
  z-index: 1;
  height: 30px;

  img {
    position: relative;
    top: 20px;
    display: block;
    margin: 0 auto;
  }

  &.ing-cheese {
    height: 10px;
    img {
      width: 310px;
    }
  }

  &.ing-pickles {
    height: 15px;
    img {
      top: 40px;
      width: 215px;
    }
  }

  &.ing-lettuce {
    height: 25px;
    img {
      width: 340px;
    }
  }

  &.ing-patty,
  &.ing-bacon {
    height: 40px;
    img {
      width: 280px;
    }
  }

  &.ing-tomato {
    height: 20px;
    img {
      width: 270px;
    }
  }
`;

const TopBunContainer = styled(a.div)`
  position: relative;
  z-index: 100;
  width: 300px;
  top: 105px;
`;

const BottomBunContainer = styled(a.div)`
  position: relative;
  width: 300px;
  z-index: 0;
`;

const Container = React.forwardRef((props, ref) => {
  const { topBunTransformValue, bottomBunTransformValue } = useSpring({
    config: { ...config.wobbly },
    topBunTransformValue:
      props.dragStatus.canDrop && props.dragStatus.isOver
        ? "rotate(-20deg) translateY(-150px)"
        : "rotate(0deg) translateY(0px)",
    bottomBunTransformValue:
      props.dragStatus.canDrop && props.dragStatus.isOver
        ? "scale(1.1) translateY(-10px)"
        : "scale(1) translateY(0px)"
  });

  return (
    <BurgerContainer ref={ref}>
      <TopBunContainer
        style={{
          transform: topBunTransformValue.interpolate(d => d)
        }}
      >
        <img src={TopBun} alt="Top Bun" />
      </TopBunContainer>
      <a.div
        style={{
          zIndex: 1,
          transform: bottomBunTransformValue.interpolate(d => d)
        }}
      >
        {props.children}
      </a.div>

      <BottomBunContainer
        style={{
          transform: bottomBunTransformValue.interpolate(d => d)
        }}
      >
        <img src={BottomBun} alt="Bottom Bun" />
      </BottomBunContainer>
    </BurgerContainer>
  );
});

export default { Container, IngredientsList, Ingredient };
