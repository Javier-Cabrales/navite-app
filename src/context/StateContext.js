import { createContext } from "react"

export const StateContext = createContext()

const user = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

const initialState = {
    user,
    questions: [{ question: "", answere: "" }],
    isLoggedIn: false
}

const StateProvider = ({ children }) => {
    return (
        <StateContext.Provider value={{ initialState }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider