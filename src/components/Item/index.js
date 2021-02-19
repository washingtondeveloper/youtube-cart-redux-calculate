import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart";
import { formatPrice } from "../../utils/format-price";

export default function Item({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={item.image}
        className="card-img-top"
        alt="..."
        style={{ height: "13rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {formatPrice(item.price)}
        </h6>
        <p className="card-text">{item.description}</p>
        <a
          href="LINK"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addItem(item));
          }}
        >
          Adicionar <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
