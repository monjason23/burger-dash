import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useTransition, config } from "react-spring";
import { useDrop } from "react-dnd";

import Burger from "../components/Burger";

function AnimatedBurger() {
  const burgers = useSelector(state => state.gameStatus.burgers, shallowEqual);

  const burgerIndex = useSelector(
    state => state.gameStatus.burgerIndex,
    shallowEqual
  );

  const [{ canDrop }] = useDrop({
    accept: "BurgerIngredient",
    collect: monitor => ({
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
        <img src={require(`../img/${item.name}.png`)} alt={item.name} />
      </Burger.Ingredient>
    ));
  }

  return (
    <Burger.Container dragStatus={{ canDrop }}>
      <Burger.IngredientsList>
        {renderAnimatedBurgerIngredients()}
      </Burger.IngredientsList>
    </Burger.Container>
  );
}

function GameBurger() {
  const droppableArea = document.querySelector(".droppable-area");

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
      <Burger.SliderContainer key={key} style={props}>
        <AnimatedBurger />
      </Burger.SliderContainer>
    ));
  }

  return <>{renderAnimatedBurgerList()}</>;
}

export default GameBurger;
