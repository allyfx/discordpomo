import {
  ComponentType,
} from "react";
import {
  Route as RouteReact,
  RouteProps,
} from "react-router-dom";

interface IRouteProps extends RouteProps {
  component: ComponentType;
}

export function Route({ component: Component, ...rest }: IRouteProps) {
  return (
    <RouteReact
      {...rest}
      render={({ location }) => {
        return <Component />
    }}
    />
  )
}