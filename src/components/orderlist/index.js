import React from "react";
import { useSelector } from "react-redux";
import { selectOrderProductItem } from "../../store/orderproductitem/selectors";
import { selectProducts } from "../../store/products/selectors";

const OrderList = ({ changeClass, onclose }) => {
  const order = useSelector(selectOrderProductItem);
  const products = useSelector(selectProducts);
  console.log(products);
  const f = products?.filter((p) => p.id === order?.productId);
  console.log("orders", order, f);
  return (
    <div className={`OrderList ${changeClass} `}>
      <div className="bg" onClick={onclose}></div>
      <div className="list">
        {order ? (
          <div className="card">
            <div className="image">
              <img src={f[0].imageurl} alt="" />
            </div>

            <ul className="text">
              <li> Size:{order.size}</li>
              <li> Color:{order.color}</li>
              <li> Type:{order.type}</li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <button> Proceed with Purchase</button>
      </div>
    </div>
  );
};

export default OrderList;
