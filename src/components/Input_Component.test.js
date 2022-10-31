import React from 'react';
import { render } from 'react-dom';
import Input_Component from './Input_Component';

it("Render without crashing", ()=>{
    const div = document.createElement("div");
    render(<Input_Component />,div)
})