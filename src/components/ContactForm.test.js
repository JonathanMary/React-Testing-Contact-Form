import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("renders without error", () => {
    render(<ContactForm />);
});

test("fill form and submit", async () => {
    const promise = Promise.resolve();
    const { debug } = render(<ContactForm />);
    console.log(debug())

    //catch all form elements
    const firstName = screen.getByPlaceholderText(/Edd/i);
    const lastName = screen.getByPlaceholderText(/Burke/i);
    const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const message = screen.getByLabelText(/message/i);

    userEvent.type(firstName, 'Adam');
    userEvent.type(lastName, '');
    userEvent.type(email, 'AdamMadame@gmail.com');
    userEvent.type(message, 'Hello this is Adam');

    const inputButton = screen.getByRole(/button/i);
    userEvent.click(inputButton);

    expect.objectContaining({
        "firstName": "Adam",
        "lastName": "Madame",
        "email": "AdamMadame@gmail.com",
        "message": "Hello this is Adam",
    });

    await act(() => promise);
})