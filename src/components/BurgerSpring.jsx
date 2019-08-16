import React from "react";
import styled from "styled-components";

import { useSpring, config, animated as a } from "react-spring";

import BottomBun from "./../img/BottomBun.svg";
import TopBun from "./../img/TopBun.svg";
import Plate from "./../img/Plate.png";

import { device } from "./../constants";

const BurgerContainer = styled(a.div)`
  position: absolute;
  bottom: 140px;
  width: 310px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media ${device.tablet} {
    bottom: 80px;
  }
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
    height: 5;
    img {
      width: 230px;
    }

    @media ${device.mobileM} {
      height: 10px;
      img {
        width: 310px;
      }
    }
  }

  &.ing-pickles {
    height: 5px;
    img {
      top: 40px;
      width: 130px;
    }

    @media ${device.mobileM} {
      height: 15px;
      img {
        width: 215px;
      }
    }
  }

  &.ing-lettuce {
    height: 5px;
    img {
      width: 230px;
    }

    @media ${device.mobileM} {
      height: 16px;
      img {
        width: 340px;
      }
    }
  }

  &.ing-patty,
  &.ing-bacon {
    height: 5px;
    img {
      top: 10px;
      width: 210px;
    }
    @media ${device.mobileM} {
      height: 25px;
      img {
        width: 280px;
      }
    }
  }

  &.ing-tomato {
    height: 5px;
    img {
      width: 185px;
    }

    @media ${device.mobileM} {
      height: 20px;
      img {
        width: 270px;
      }
    }
  }
`;

const TopBunContainer = styled(a.div)`
  position: relative;
  z-index: 100;
  width: 210px;
  top: 75px;

  @media ${device.mobileM} {
    width: 300px;
    top: 105px;
  }
`;

const BottomBunContainer = styled(TopBunContainer)`
  top: 0;
  z-index: 2;

  @media ${device.mobileM} {
    top: 0px;
  }
`;

const PlateContainer = styled(a.div)`
  position: absolute;
  width: 470px;
  bottom: -80px;
  z-index: 1;

  img {
    width: 100%;
  }
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

  function onClick(e) {
    e.preventDefault();
    props.onClick();
  }

  return (
    <BurgerContainer ref={ref} onClick={onClick}>
      <TopBunContainer
        style={{
          transform: topBunTransformValue.interpolate(d => d)
        }}
      >
        <img src={TopBun} alt="Top Bun" />
      </TopBunContainer>
      <a.div
        style={{
          zIndex: 3,
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
      <PlateContainer>
        <img src={Plate} alt="Plate" />
      </PlateContainer>
    </BurgerContainer>
  );
});

export default { Container, IngredientsList, Ingredient };
