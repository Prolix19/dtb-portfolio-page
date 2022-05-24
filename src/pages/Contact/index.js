import React, {useState} from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            };
        } else {
            if (!e.target.value.length) {
                setErrorMessage(capitalizeFirstLetter(`${e.target.name}`) + ' is required.');
            } else {
                setErrorMessage('');
            };
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };


    return (
        <div>
            <Header />
            <main id="contact">
                <section>
                    <h1 id="cTitle">
                        Contact Me
                    </h1>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit" data-testid="submitButton">Submit</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;