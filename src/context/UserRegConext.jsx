import { createContext, useReducer } from "react";
import { USER_AUTH, USER_TYPE } from "./data";

export const UserAuthContext = createContext(null);
export const UserAuthDispatchContext = createContext(null);

export function UserAuthReducer(userAuth, action) {
  switch (action.type) {
    case USER_TYPE.patchReg: {
      return {
        ...userAuth,
        userReg: action.userReg,
      };
    }
    case USER_TYPE.patchModalAuth: {
      return {
        ...userAuth,
        ModalAuth: action.ModalAuth,
      };
    }
    case USER_TYPE.patchModalReg: {
      return {
        ...userAuth,
        ModalReg: action.ModalReg,
      };
    }
    default: {
      console.warn(`Необработанный action.type`);
      return { ...userAuth };
    }
  }
}

export function UserAuthProvider({ children }) {
  const [userAuth, dispatch] = useReducer(UserAuthReducer, USER_AUTH);
  return (
    <UserAuthContext.Provider value={userAuth}>
      <UserAuthDispatchContext.Provider value={dispatch}>
        {children}
      </UserAuthDispatchContext.Provider>
    </UserAuthContext.Provider>
  );
}
