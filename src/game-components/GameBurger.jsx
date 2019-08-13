import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useDrop } from "react-dnd";
import { useTransition, config } from "react-spring";

import Burger from "../components/Burger";

function GameBurger() {
  const burgers = useSelector(state => state.gameStatus.burgers, shallowEqual);

  const burgerIndex = useSelector(
    state => state.gameStatus.burgerIndex,
    shallowEqual
  );

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "BurgerIngredient",
    drop: () => ({ name: "Dustbin" }),
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
      from: { height: 0, opacity: 0.5, transform: "scale(1.5)" },
      enter: item => ({
        height: item.height,
        opacity: 1,
        transform: "scale(1)"
      })
    }
  );

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

  return (
    <Burger.Container ref={drop} dragStatus={{ isOver, canDrop }}>
      <Burger.IngredientsList>
        {renderAnimatedBurgerIngredients()}
      </Burger.IngredientsList>
    </Burger.Container>
  );
}

export default GameBurger;
