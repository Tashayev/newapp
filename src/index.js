import React, {createContext, useContext,} from "react";
import ReactDOM from "react-dom/client";
import FetchData from "./store/FetchData";
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <FetchData/>
);
