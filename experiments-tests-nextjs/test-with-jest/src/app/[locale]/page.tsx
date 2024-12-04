// pages/contact.tsx

import ContactForm from "./container/contactForm";

const ContactPage = () => {
    const handleFormSubmit = (name: string) => {
        alert(`Hello, ${name}!`);
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <ContactForm onSubmit={handleFormSubmit} />
        </div>
    );
};

export default ContactPage;
