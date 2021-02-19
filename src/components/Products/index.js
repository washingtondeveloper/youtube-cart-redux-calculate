import { useSelector } from "react-redux";
import { productsSelector } from "../../store/products";
import Item from "../Item";

export default function Products() {
  const items = useSelector(productsSelector);
  return (
    <div className="container">
      <div className="row">
        {items.map((item, index) => (
          <div className="col-sm" key={index}>
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
