import { render } from "@testing-library/react";
import Header from "../Header";

test("Logo Should Be load On rendering Header",()=>{
    //Load Header 
    const header=render(<Header/>);
    console.log(header);

    //Check if Logo Loaded
})