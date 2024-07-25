import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        // Basic form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            setSubmitting(false);
            return;
        }

        // Send email using EmailJS
        emailjs.sendForm('service_ba4h34m', 'template_azlbc1l', e.target, 'oeg8_v0baK-c55e7B')
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
                // Handle success
                alert('Your message has been sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
                setSubmitting(false);
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                // Handle error
                alert('Sorry, there was an issue sending your message. Please try again later.');
                setSubmitting(false);
            });
    };

    return (
        <div className="my-8">
            <div className="flex flex-wrap flex-col items-center">
                <h1 className="font-bold">CONTACT</h1>
                <p className="text-red-300 text-4xl">~</p>
                <p className="font-light">Feel free to contact me by filling and submitting the form and I will get back to you as soon as possible</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="bg-red-50 mt-10 block mx-auto w-[700px] py-[2rem] px-[2rem]">
                    <p className="font-light text-sm">Name</p>
                    <input
                        className="bg-white py-[13px] pl-3 pr-[305px] outline-none"
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <p className="font-light text-sm">Email</p>
                    <input
                        className="bg-white py-[13px] pl-3 pr-[305px] outline-none"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <p className="font-light text-sm">Message</p>
                    <textarea
                        placeholder="Enter Your Message"
                        className="bg-white pl-3 outline-none"
                        cols="54"
                        rows="10"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-red-300 py-[13px] px-[50px] rounded-tr-3xl rounded-bl-3xl mt-4 ml-[415px]"
                        disabled={submitting}
                    >
                        {submitting ? 'Submitting...' : 'SUBMIT'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contacts;

