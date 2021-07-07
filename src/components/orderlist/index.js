import React from "react";
import { useSelector } from "react-redux";
import { selectOrderProductItem } from "../../store/orderproductitem/selectors";
// import { selectProducts } from "../../store/products/selectors";

const OrderList = ({ changeClass, onclose }) => {
  const orderitems = useSelector(selectOrderProductItem);
  console.log("orderitem", orderitems);
  return (
    <div className={`OrderList ${changeClass} `}>
      <div className="bg" onClick={onclose}></div>
      <div className="list">
        <div className="items">
          {!orderitems ? (
            <h1 style={{ textAlign: "center", marginTop: "50%" }}>
              NO ITEMS IS ADDED
            </h1>
          ) : (
            orderitems.map((order) => {
              return (
                <div className="card" key={order.id}>
                  <div className="image">
                    <img src={order.product.imageurl} alt="" />
                  </div>

                  <ul className="text">
                    <li> Size:{order.size}</li>
                    <li> Color:{order.color}</li>
                    <li> Type:{order.type}</li>
                  </ul>
                </div>
              );
            })
          )}
        </div>

        <button> Proceed with Purchase</button>
      </div>
    </div>
  );
};

export default OrderList;
