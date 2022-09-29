import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import {ContactForm} from '../ContactForm';
import { FormMethods } from '../utils';

const mockHandleSubmit = jest.spyOn()

describe('Contact Form', () => {
    it('renders properly', () => {
        render(<ContactForm />);
        expect(screen.getByText('Email address')).toBeInTheDocument();
    });

    it('handles form submission', () => {
        render(<ContactForm />);
        expect(screen.getByText('Submit')).toBeInTheDocument();
        expect(FormMethods.handleSubmit).toHaveBeenCalledTimes(1);
        expect(FormMethods.handleSubmit).toHaveBeenCalledWith({
            "First Name": 'Foo',
            "Last Name": 'Bar',
            "Email Address": 'Baz',
            "Phone #": '1234567890',
            Message: "Fun",
        });
    })
})