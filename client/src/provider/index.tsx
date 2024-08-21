import React from 'react';
import { useReducer, useMemo } from "react";
import { createContext, useContext } from "react";

const INIT_STATE: InitStateObject = {
  lang: "en",
  loading: false,
}

// create context
const GlobalContext = createContext<any>({});
const reducer = (state: InitStateObject, { type, payload }: ReducerObject) => {
  return { ...state, [type]: payload };
}

// use contexts
function useGlobalContext() {
  return useContext(GlobalContext);
}

const GlobalContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <GlobalContext.Provider
      value={useMemo(() => [
        state, { dispatch }
      ], [state])}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { useGlobalContext, GlobalContextProvider };