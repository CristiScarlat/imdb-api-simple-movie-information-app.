import React from 'react'

const StoreContext = React.createContext();

const initialState = {}

const StoreProvider = props => {

    const [globalState, dispatch] = React.useReducer((state, action) => {
        console.log(state, action)
        switch (action.type) {
            case "SET_SEARCH_RESULTS":
                return { ...state, name: action.name }
            case "SET_CATEGORIES":
                return { ...state, categories: action.categories }
            case "SET_QUIZ_PARAMS":
                return { ...state, quizParams: action.quizParams }
            default:
                return state;
        }
    }, initialState)

    return (
        <StoreContext.Provider value={{ globalState, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export { StoreContext, StoreProvider }