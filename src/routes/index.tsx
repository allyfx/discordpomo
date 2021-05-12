import { BrowserRouter } from "react-router-dom";

import { Route } from "./Route";

import { Login } from "pages/Login";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} />
    </BrowserRouter>
  )
}