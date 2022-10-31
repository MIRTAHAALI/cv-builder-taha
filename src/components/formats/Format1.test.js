import React from 'react';
import { render } from 'react-dom';
import Format1 from './Format1';

it("Render without crashing", ()=>{
    const div = document.createElement("div");
    render(<Format1></Format1>,div)
})