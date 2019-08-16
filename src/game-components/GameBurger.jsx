import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useTransition, config, animated as a } from "react-spring";
import { useDrop } from "react-dnd";

import { serveBurger } from "./../actions";

import Burger from "./../components/Burger";

const GameBurgerSlideContainer = styled(a.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
`;

function AnimatedBurger() {
  const dispatch = useDispatch();
  const burgers = useSelector(state => state.gameStatus.burgers, shallowEqual);
  const ordersComplete = useSelector(
    state => state.gameStatus.orders.length === 0,
    shallowEqual
  );

  const burgerIndex = useSelector(
    state => state.gameStatus.burgerIndex,
    shallowEqual
  );

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "BurgerIngredient",
    drop: () => ({ name: "Burger" }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const ingredientTransition = useTransition(
    burgers[burgerIndex].ingredients,
    item => item.key,
    {
      config: config.wobbly,
      from: {
        height: 0,
        opacity: 0.7,
        transform: "translate3d(0px, -10px, 0px) scale(1.5)"
      },
      enter: item => ({
        height: item.height,
        opacity: 1,
        transform: `translate3d(${randomAxisX()}px, 0px, 0px) scale(1)`
      })
    }
  );

  function randomAxisX() {
    return Math.floor(Math.random() * 16) - 8;
  }

  function renderAnimatedBurgerIngredients() {
    return ingredientTransition.map(({ item, props, key }, index) => (
      <Burger.Ingredient
        key={key}
        className={item.className}
        style={{
          zIndex: burgers[burgerIndex].ingredients.length - index,
          ...props
        }}
      >
        <img src={require(`../img/${item.name}.svg`)} alt={item.name} />
      </Burger.Ingredient>
    ));
  }

  function handleOnClick() {
    if (!ordersComplete) return;
    dispatch(serveBurger());
  }

  return (
    <>
      <Burger.Container
        ref={drop}
        dragStatus={{ isOver, canDrop }}
        onClick={handleOnClick}
      >
        <Burger.IngredientsList>
          {renderAnimatedBurgerIngredients()}
        </Burger.IngredientsList>
      </Burger.Container>
    </>
  );
}

function GameBurger() {
  const burgerIndex = useSelector(
    state => state.gameStatus.burgerIndex,
    shallowEqual
  );

  const burgerTransition = useTransition(burgerIndex, item => item, {
    config: config.wobbly,
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(-100%)" }
  });

  function renderAnimatedBurgerList() {
    return burgerTransition.map(({ props, key }) => (
      <GameBurgerSlideContainer key={key} style={props}>
        <AnimatedBurger />
      </GameBurgerSlideContainer>
    ));
  }

  return <>{renderAnimatedBurgerList()}</>;
}

export default GameBurger;
