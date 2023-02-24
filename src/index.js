import React, {createContext, } from "react";
import ReactDOM from "react-dom/client";
import FetchData from "./store/FetchData";
export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(process.env.REACT_APP_API_URL)
root.render(
    <FetchData/>
);
