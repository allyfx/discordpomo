import {
  ComponentType,
  useEffect,
  useContext,
  useState,
} from "react";
import {
  Route as RouteReact,
  RouteProps,
  Redirect
} from "react-router-dom";

import { ApplicationContext } from "contexts/ApplicationContext";

interface IRouteProps extends RouteProps {
  component: ComponentType;
  isPrivate?: boolean;
}

export function Route({ component: Component, isPrivate = false, ...rest }: IRouteProps) {
  const [isLogged, setIsLogged] = useState(false);
  const { user } = useContext(ApplicationContext);

  useEffect(() => {
    if (isPrivate) {
      if (
        user.avatar !== '' &&
        user.token !== '' &&
        user.username !== '' &&
        !isLogged
      )
        setIsLogged(true);
    }
  }, [isLogged, user, isPrivate]);

  return (
    <RouteReact
      {...rest}
      render={({ location }) => {
        return isPrivate === !!isLogged ? (
            <Component />
        ) : (
            <Redirect
                to={{
                    pathname: isPrivate ? '/' : '/dashboard',
                    state: { from: location }
                }}
            />
        )
    }}
    />
  )
}