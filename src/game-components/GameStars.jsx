import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useTransition } from "react-spring";

import { easeCircleOut } from "d3-ease";

import Star from "../img/Star.png";
import Stars from "../components/Stars";

function GameStars() {
  const numOfBurgers = useSelector(
    state => state.gameStatus.burgers.length,
    shallowEqual
  );

  const winStreak = useSelector(
    state => state.gameStatus.winStreak,
    shallowEqual
  );

  const fewStars = [
    { id: "star1", x: 20, y: -130, duration: 1 },
    { id: "star3", x: -100, y: 70, duration: 3 },
    { id: "star5", x: 130, y: 20, duration: 4 }
  ];

  const manyStars = [
    { id: "star1", x: 100, y: -130, duration: 1 },
    { id: "star2", x: -210, y: 220, duration: 2 },
    { id: "star3", x: 270, y: -210, duration: 3 },
    { id: "star4", x: 100, y: -130, duration: 1 },
    { id: "star5", x: 10, y: 220, duration: 4 },
    { id: "star6", x: -100, y: -210, duration: 3 }
  ];

  const [stars, setStars] = useState([]);
  const starsTransition = useTransition(stars, item => item.id, {
    config: { duration: 2000, easing: easeCircleOut },
    from: { transform: `translate(0px, 0px) scale(1.5)`, opacity: 1 },
    enter: { transform: `translate(0px, 0px) scale(1.5)`, opacity: 1 },
    leave: item => ({
      transform: `translate(${item.x}px, ${item.y}px) scale(${0})`,
      opacity: 0.5
    })
  });

  useEffect(() => {
    let timeout;

    setStars(numOfBurgers > 1 ? (winStreak > 3 ? manyStars : fewStars) : []);

    timeout = setTimeout(() => {
      setStars([]);
    }, 100);

    return () => clearTimeout(timeout);
  }, [numOfBurgers]);

  function renderStars() {
    return starsTransition.map(
      ({ item, props, key }) =>
        item && (
          <Stars.Star key={key} style={props} duration={item.duration}>
            <img src={Star} alt="Stars" />
          </Stars.Star>
        )
    );
  }

  return <Stars.Container>{renderStars()}</Stars.Container>;
}

export default GameStars;
