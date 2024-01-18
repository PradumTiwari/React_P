import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";



test("Logo Should Be load On rendering Header",()=>{
    //Load Header 
    const header=render(
        <StaticRouter>
          <Provider store={store}>
             <Header/>
          </Provider>
         </StaticRouter>
    );
    // console.log(header);
    const logo=header.getAllByTestId("logo");
    console.log(logo);
    
    expect(logo[0].src).toBe("https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png");

    //Check if Logo Loaded
   
   


})