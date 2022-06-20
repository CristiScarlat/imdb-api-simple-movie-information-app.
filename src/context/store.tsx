import React from "react";

const StoreContext = React.createContext({});

interface IStateType {
  search: string | null;
}

interface IActionType {
  type: "SET_SEARCH_RESULTS";
  load: any;
}

const initialState: IStateType = {
  search: null,
};

const StoreProvider = (props: any) => {
  const [globalState, dispatch] = React.useReducer(
    (state: IStateType, action: IActionType) => {
      switch (action.type) {
        case "SET_SEARCH_RESULTS":
          console.log(action)
          return { ...state, search: action.load.search };
        default:
          return state;
      }
    },
    initialState
  );

  return (
    <StoreContext.Provider value={{ globalState, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
