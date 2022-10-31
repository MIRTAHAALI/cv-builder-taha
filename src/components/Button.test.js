import React from 'react';
import { render } from 'react-dom';
import Button from './Button';

it("Render without crashing", ()=>{
    const div = document.createElement("div");
    render(<Button></Button>,div)
})