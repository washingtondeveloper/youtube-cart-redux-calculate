import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartPage from "./CartPage";
import HomePage from "./HomePage";

export default function Pages() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={CartPage} exact path="/cart" />
      </Switch>
    </BrowserRouter>
  );
}
