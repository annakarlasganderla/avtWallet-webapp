import { createStore } from "redux";
import handleExpensive from "./reducer";

const store = createStore(handleExpensive);

export default store;