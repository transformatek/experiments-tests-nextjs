// __tests__/contact.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from '../../../src/app/[locale]/page';

describe('ContactPage Integration', () => {
    it('submits the form and triggers the callback', () => {
        // Mock the alert
        window.alert = jest.fn();

        render(<ContactPage />);

        // Find the input field and button
        const input = screen.getByPlaceholderText(/Enter your name/i);
        const button = screen.getByText(/Submit/i);

        // Simulate user typing into the input
        fireEvent.change(input, { target: { value: 'John Doe' } });

        // Simulate form submission
        fireEvent.click(button);

        // Check if the callback was triggered (alert should be called)
        expect(window.alert).toHaveBeenCalledWith('Hello, John Doe!');
    });
});
