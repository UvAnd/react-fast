import React from "react";
import { IAppContext } from "./interfaces/todos";

const Context = React.createContext<IAppContext | null>(null);

export default Context;