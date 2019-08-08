import React from "react";
import { useSelector } from "react-redux";
import { useTransition, config } from "react-spring";

import Order from "../components/Order";

function GameOrder() {
  const { orders, burgers, burgerIndex } = useSelector(
    state => state.burgerStatus
  );

  const ordersTransition = useTransition(orders, item => item.name, {
    config: config.wobbly,
    from: { height: 0, opacity: 0.5, transform: "translateX(-100%)" },
    enter: {
      height: 40,
      opacity: 1,
      transform: "translateX(0%)"
    },
    leave: {
      height: 0,
      opacity: 0,
      transform: "translateX(-100%)"
    }
  });

  function renderOrders() {
    return ordersTransition.map(({ item, props, key }) => {
      return (
        <Order.Item key={key} style={props}>
          {item.name}
          <Order.Count>
            x <strong>{item.count}</strong>
          </Order.Count>
        </Order.Item>
      );
    });
  }

  return <Order.Container>{renderOrders()}</Order.Container>;
}

export default GameOrder;
