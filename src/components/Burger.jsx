import React from "react";

import styled from "styled-components";

import BottomBun from "../img/BottomBun.svg";
import TopBun from "../img/TopBun.svg";

const BurgerContainer = styled.div`
  position: relative;
  width: 310px;
  height: 400px;
  background-color: #fff;
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

const Ingredient = styled.li`
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
      width: 215px;
    }
  }

  &.ing-lettuce {
    height: 25px;
    img {
      width: 340px;
    }
  }

  &.ing-patty {
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

const TopBunContainer = styled.div`
  position: relative;
  z-index: 100;
  width: 300px;
  top: 105px;
`;

const BottomBunContainer = styled.div`
  position: relative;
  width: 300px;
  z-index: 0;
`;

function Container(props) {
  return (
    <BurgerContainer>
      <TopBunContainer>
        <img src={TopBun} alt="Top Bun" />
      </TopBunContainer>

      {props.children}

      <BottomBunContainer>
        <img src={BottomBun} alt="Bottom Bun" />
      </BottomBunContainer>
    </BurgerContainer>
  );
}

export default { Container, IngredientsList, Ingredient };
