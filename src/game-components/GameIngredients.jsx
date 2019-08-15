import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useDrag, DragPreviewImage } from "react-dnd";
import { isMobile } from "react-device-detect";
import { useSpring, animated as a, config } from "react-spring";
import Draggable from "react-draggable";

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
  const [dragging, setDragging] = useState(false);
  const dragProp = useSpring({
    config: config.wobbly,
    transform: dragging ? "scale(5)" : "scale(1)"
  });

  const dispatch = useDispatch();
  const imgSrc = require(`./../img/${props.data.name}.svg`);

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: "BurgerIngredient" },
    end: (item, monitor) => {
      if (isDragging) {
        console.log("Dragging");
      }

      if (item && monitor.getDropResult()) {
        dispatch(updateBurgerContent(props.data));
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  function handleOnStart(e) {
    e.preventDefault();
    setDragging(true);
  }

  function handleOnStop(e) {
    e.preventDefault();
    setDragging(false);
  }

  function renderDraggableContents() {
    if (isMobile) {
      return (
        <>
          <Draggable
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={{ x: 0, y: 0 }}
            scale={1.5}
            onStart={handleOnStart}
            onStop={handleOnStop}
          >
            <div>
              <a.img
                className="handle"
                style={dragging ? dragProp : {}}
                ref={drag}
                src={imgSrc}
                alt={props.data.name}
              />
            </div>
          </Draggable>
        </>
      );
    } else {
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
  }

  return renderDraggableContents();
}

export default GameIngredients;
