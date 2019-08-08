import React from "react";
import { useDispatch } from "react-redux";
import { useDrag, DragPreviewImage } from "react-dnd";
import rnd from "randomstring";

import Ingredients from "../components/Ingredients";

function GameIngredients() {
  const IngredientsArray = [
    {
      name: "Cheese",
      className: "ing-cheese",
      height: 10
    },
    {
      name: "Pickles",
      className: "ing-pickles",
      height: 15
    },
    {
      name: "Lettuce",
      className: "ing-lettuce",
      height: 25
    },
    {
      name: "Tomato",
      className: "ing-tomato",
      height: 30
    },
    {
      name: "Patty",
      className: "ing-patty",
      height: 40
    },
    {
      name: "Bacon",
      className: "ing-bacon",
      height: 20
    }
  ];

  function renderIngredients() {
    return IngredientsArray.map(ing => (
      <Ingredients.Item key={ing.name}>
        <DraggableItemIngredient data={ing} />
      </Ingredients.Item>
    ));
  }

  return <Ingredients.Container>{renderIngredients()}</Ingredients.Container>;
}

function DraggableItemIngredient(props) {
  const dispatch = useDispatch();

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: "BurgerIngredient" },
    end: (item, monitor) => {
      if (item && monitor.getDropResult()) {
        addIngredient();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  function addIngredient() {
    let payload = { key: rnd.generate(8), ...props.data };

    dispatch({
      type: "ADD_INGREDIENT_BURGER",
      payload
    });

    dispatch({
      type: "UPDATE_ORDERS"
    });
  }

  return (
    <>
      <DragPreviewImage
        connect={preview}
        src={require(`../img/${props.data.name}.svg`)}
      />
      <img
        ref={drag}
        src={require(`../img/${props.data.name}.svg`)}
        alt={props.data.name}
      />
    </>
  );
}

export default GameIngredients;
