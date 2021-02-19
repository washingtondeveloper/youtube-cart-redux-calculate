import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotalSelector,
  increment,
  itemsCartSelector,
} from "../../store/cart";
import { formatPrice } from "../../utils/format-price";

export default function Cart() {
  const items = useSelector(itemsCartSelector);
  const total = useSelector(calculateTotalSelector);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cart.value);

  console.log(value);

  return (
    <div className="container">
      <h1 className="display-1">Carrinho </h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={index}
          >
            <span className="">
              <img src={item.image} width="25" alt="Logo" height="25" />{" "}
              {item.title}
            </span>
            <span className="text-end">
              <span className="badge rounded-pill bg-success">
                {item.quantity}
              </span>{" "}
              {formatPrice(item.price)}
            </span>
          </li>
        ))}

        <li className="list-group-item list-group-item-dark text-end ">
          Total: {formatPrice(total)}
          <button
            className="btn btn-primary"
            onClick={() => dispatch(increment())}
          >
            Incremento
          </button>
        </li>
      </ul>
    </div>
  );
}
