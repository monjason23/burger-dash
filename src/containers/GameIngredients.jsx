import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useDrag, DragPreviewImage } from "react-dnd";
import { isMobile } from "react-device-detect";
import useWindowSize from "react-use-window-size";
import Draggable from "react-draggable";

import { updateBurgerContent } from "./../actions";
import useGameAudio from "./../hooks/useGameAudio";

import Ingredients from "./../components/Ingredients";

function GameIngredients() {
  const { width } = useWindowSize();

  const IngredientsArray = [
    {
      name: "Cheese",
      className: "ing-cheese",
      height: width >= 375 ? 10 : 5
    },
    {
      name: "Pickles",
      className: "ing-pickles",
      height: width >= 375 ? 15 : 10
    },
    {
      name: "Lettuce",
      className: "ing-lettuce",
      height: width >= 375 ? 25 : 10
    },
    {
      name: "Tomato",
      className: "ing-tomato",
      height: width >= 375 ? 30 : 10
    },
    {
      name: "Patty",
      className: "ing-patty",
      height: width >= 375 ? 40 : 20
    },
    {
      name: "Bacon",
      className: "ing-bacon",
      height: width >= 375 ? 20 : 10
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
  const [playing, { playOnEveryInteraction }] = useGameAudio("pop");

  const dispatch = useDispatch();
  const imgSrc = require(`./../img/${props.data.name}.png`);

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: "BurgerIngredient" },
    end: (item, monitor) => {
      if (item && monitor.getDropResult()) {
        dispatch(updateBurgerContent(props.data, updateBurgerContentCallback));
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  function updateBurgerContentCallback(res) {
    if (res) playOnEveryInteraction();
    else playOnEveryInteraction("incorrect");
  }

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
            defaultPosition={{ x: 300, y: 300 }}
            position={{ x: 0, y: 0 }}
            scale={1}
            onStart={handleOnStart}
            onStop={handleOnStop}
          >
            <Ingredients.ItemMobileDragHandler ref={drag}>
              <img
                className={`${dragging ? "zoom" : ""}`}
                src={imgSrc}
                alt={props.data.name}
              />
            </Ingredients.ItemMobileDragHandler>
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
