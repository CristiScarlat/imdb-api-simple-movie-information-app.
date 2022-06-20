import React from "react";

const StoreContext = React.createContext({});

interface IWatchlistElem {
  title: string,
  id: string
}

interface IStateType {
  watchlist: IWatchlistElem[];
}

interface IActionType {
  type: "SET_WATCHLIST";
  payload: {
    watchlist: any;
  };
}

const initialState: IStateType = {
  watchlist: [],
};

const StoreProvider = (props: any) => {
  const [globalState, dispatch] = React.useReducer(
    (state: IStateType, action: IActionType) => {
      console.log({state, action})
      switch (action.type) {
        case "SET_WATCHLIST":
          const found = state.watchlist.find((movie: IWatchlistElem) => movie.id === action.payload.watchlist.id);
          if(found)return {...state}
          return { ...state, watchlist: [...state.watchlist, action.payload.watchlist] };
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
