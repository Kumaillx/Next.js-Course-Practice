import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <main className="contact-page">
            <h1>Contact Us</h1>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" type="text" required />

                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows={5} required />

                <button type="submit">Send</button>
            </form>
        </main>
    );
};

export default ContactPage;