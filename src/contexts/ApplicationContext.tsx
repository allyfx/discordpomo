import {
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface IUser {
  avatar?: string;
  username?: string;
  token?: string;
}

interface IApplicationContextData {
  user: IUser;
  authenticateUser: (user: IUser) => void;
}

export const ApplicationContext = createContext({} as IApplicationContextData);

interface IApplicationProviderProps {
  children: ReactNode;
}

export function ApplicationProvider({
  children
}: IApplicationProviderProps) {
  const [user, setUser] = useState<IUser>({});

  const authenticateUser = (user: IUser) => {
    setUser(user);
  };

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  return (
    <ApplicationContext.Provider value={{
      user,
      authenticateUser
    }}>
      {children}
    </ApplicationContext.Provider>
  )
}
