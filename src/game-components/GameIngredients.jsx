import React from "react";
import { useDispatch } from "react-redux";
import { useDrag, DragPreviewImage, connectDragPreview } from "react-dnd";
import { updateBurgerContent } from "./../actions";

import Ingredients from "./../components/Ingredients";

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
  const imgSrc = require(`./../img/${props.data.name}.svg`);

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: "BurgerIngredient" },
    end: (item, monitor) => {
      if (item && monitor.getDropResult()) {
        dispatch(updateBurgerContent(props.data));
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <>
      <DragPreviewImage
        connect={preview}
        src={require(`./../img/${props.data.name}.png`)}
      />
      <img ref={drag} src={imgSrc} alt={props.data.name} />
    </>
  );
}

export default GameIngredients;
