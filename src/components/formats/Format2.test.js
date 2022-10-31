import React from 'react';
import { render } from 'react-dom';
import Format1 from './Format2';

it("Render without crashing", ()=>{
    const div = document.createElement("div");
    render(<Format2 />,div)
})