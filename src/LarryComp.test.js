import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react";
import LarryComp from "./LarryComp";


test('test the LarryComp', async () => {
    const myCountFun = jest.fn();

    console.log('Does this work');
    render(<LarryComp countFunc={myCountFunc} />);
    // screen.debug();

    click(/larryComp/i);

    console.log(myCountFun.mock.calls.length);

    // const el = screen.getByText(/larrycomp/i);

    // fireEvent.click(el);
});

function click (txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}