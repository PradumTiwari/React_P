import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import {RESTAURANT_DATA} from "../data"
global.fetch = jest.fn(() =>{
Promise.resolve({
    json:()=>{
        return Promise.resolve(RESTAURANT_DATA)
    },
})
})

test("Search Result On Homepage",()=>{


    const body=render(
        <StaticRouter>
          <Provider store={store}>
           <Body/>
          </Provider>
        </StaticRouter>
    );


})