import { BrowserRouter } from "react-router-dom";

import { Route } from "./Route";

import { Login } from "pages/Login";
import { Token } from "pages/Token";
import { Home } from "pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/token" component={Token} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  )
}