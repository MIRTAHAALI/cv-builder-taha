import React from 'react';
import { render } from 'react-dom';
import FormatSelect from './FormatSelect';

it("Render without crashing", ()=>{
    const div = document.createElement("div");
    render(<FormatSelect />,div)
})