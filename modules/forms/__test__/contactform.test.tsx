import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import {ContactForm} from '../ContactForm';
import * as FormMethods from '../functions';

const mockSubmitContactForm = jest.spyOn(FormMethods, 'submitContactForm');

describe('Contact Form', () => {
    it('renders properly', () => {
        render(<ContactForm />);
        expect(screen.getByText('Email address')).toBeInTheDocument();
    });

    it('handles form submission', () => {
        render(<ContactForm />);
        expect(screen.getByText('Submit')).toBeInTheDocument();
        expect(mockSubmitContactForm).toHaveBeenCalledTimes(1);
        expect(mockSubmitContactForm).toHaveBeenCalledWith({
            "First Name": 'Foo',
            "Last Name": 'Bar',
            "Email Address": 'Baz',
            "Phone #": '1234567890',
            Message: "Fun",
        });
    })
})