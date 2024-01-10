const { configureStore } = require("@reduxjs/toolkit");

import cartSlice from "./cartSlice";

const store=configureStore({});

export default store;