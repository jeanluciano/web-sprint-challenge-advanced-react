import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/Last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    userEvent.type(firstNameInput, 'Jea')
    userEvent.type(lastNameInput,'luciano');
    userEvent.type(addressInput, 'jeanluciano@mailbox.org');
    userEvent.type(cityInput,'berwyn')
    userEvent.type(stateInput,'il')
    userEvent.type(zipInput,'604204')

    const button = screen.getByRole('button');
    userEvent.click(button);

    const success = await screen.findByText(/You have ordered some plants!/i);
    expect(success).toBeInTheDocument();
});
