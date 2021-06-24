import React from "react";

const OrderList = ({ changeClass, onclose }) => {
  return (
    <div className={`OrderList ${changeClass} `}>
      <div className="bg" onClick={onclose}></div>
      <div className="list"></div>
    </div>
  );
};

export default OrderList;
