import React from 'react';

const StoreContext = React.createContext({});

interface IWatchlistElem {
  title: string;
  id: string;
}

interface IStateType {
  watchlist: IWatchlistElem[];
  visitedList: IWatchlistElem[];
}

interface IActionType {
  type: 'ADD_TO_WATCHLIST' | 'REMOVE_FROM_WATCHLIST' | 'ADD_TO_VISITED_LIST';
  payload: {
    watchlist: IWatchlistElem;
    visitedList: IWatchlistElem;
  };
}

const initialState: IStateType = {
  watchlist: [],
  visitedList: []
};

const StoreProvider = (props: any) => {
  const [globalState, dispatch] = React.useReducer(
    (state: IStateType, action: IActionType) => {
      switch (action.type) {
        case 'ADD_TO_WATCHLIST':
          const found = state.watchlist.find(
            (movie: IWatchlistElem) => movie.id === action.payload.watchlist.id
          );
          if (found) return { ...state };
          return {
            ...state,
            watchlist: [...state.watchlist, action.payload.watchlist]
          };
        case 'REMOVE_FROM_WATCHLIST':
          const newWatchlist = state.watchlist.filter(
            (movie: IWatchlistElem) => movie.id !== action.payload.watchlist.id
          );

          return {
            ...state,
            watchlist: newWatchlist
          };
        case 'ADD_TO_VISITED_LIST':
          const foundInLIst = state.visitedList.find(
            (movie: IWatchlistElem) =>
              movie.id === action.payload.visitedList.id
          );
          if (foundInLIst) return { ...state };
          return {
            ...state,
            visitedList: [...state.visitedList, action.payload.visitedList]
          };
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
