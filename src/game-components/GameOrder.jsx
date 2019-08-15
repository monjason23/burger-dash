import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useTransition, config } from "react-spring";

import Order from "../components/Order";

function GameOrder() {
  const orders = useSelector(state => state.gameStatus.orders, shallowEqual);

  const ordersTransition = useTransition(orders, item => item.name, {
    config: config.wobbly,
    trail: 100,
    from: { height: 44, opacity: 1, transform: "scale(1) translateX(-110%)" },
    enter: { transform: "scale(1) translateX(0%)" },
    leave: {
      height: 0,
      opacity: 0,
      transform: "scale(0) translateX(0%)"
    }
  });

  function renderOrders() {
    return ordersTransition.map(({ item, props, key }) => {
      return (
        <Order.Item key={key} style={props} count={item.count}>
          <Order.Image>
            <img src={require(`./../img/${item.name}.svg`)} alt={item.name} />
          </Order.Image>
          <Order.Label>{item.name}</Order.Label>
          <Order.Count>
            x <strong>{item.count !== 0 ? item.count : 1}</strong>
          </Order.Count>
        </Order.Item>
      );
    });
  }

  return <Order.Container>{renderOrders()}</Order.Container>;
}

export default GameOrder;
