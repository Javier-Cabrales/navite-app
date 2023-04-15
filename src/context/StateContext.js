import { createContext, useReducer } from "react"

export const StateContext = createContext()

const initialState = {
    user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    },
    questions: [{ question: "", answere: "" }],
    isLoggedIn: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return { ...state, user: action.payload };
        case "UPDATE_QUESTIONS":
            return { ...state, questions: action.payload };
        case "UPDATE_IS_LOGGED_IN":
            return { ...state, isLoggedIn: action.payload }
        default:
            return state
    }
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const updateUser = (newUser) => {
        dispatch({ type: "UPDATE_USER", payload: newUser })
    }

    const updateQuestions = (newQuestions) => {
        dispatch({ type: "UPDATE_QUESTIONS", payload: newQuestions })
    }

    const updateIsLoggedIn = (isLoggedIn) => {
        dispatch({ type: "UPDATE_IS_LOGGED_IN", payload: isLoggedIn })
    }

    return (
        <StateContext.Provider value={{ state, updateUser, updateQuestions, updateIsLoggedIn }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider