// components/ContactForm.tsx
import { useState } from 'react';

const ContactForm = ({ onSubmit }: { onSubmit: (name: string) => void }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
