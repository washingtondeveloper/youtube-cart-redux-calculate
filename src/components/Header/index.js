import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartQuantitySelector } from "../../store/cart";

export default function Header() {
  const cartLength = useSelector(cartQuantitySelector);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fa fa-html5" aria-hidden="true"></i> Cursos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex">
            <Link to="cart">
              <i
                className="fa fa-shopping-cart text-light fa-3x"
                aria-hidden="true"
                style={{ position: "relative" }}
              >
                <span
                  style={{
                    color: "#333",
                    position: "absolute",
                    fontSize: 18,
                    fontWeight: "bold",
                    top: 10,
                    left: 25,
                    fontFamily: "Arial",
                  }}
                >
                  {cartLength}
                </span>
              </i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
