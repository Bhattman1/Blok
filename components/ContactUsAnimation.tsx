"use client"

import { useState, FormEvent, ChangeEvent } from 'react';

const ContactUsAnimation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Here, you would typically send the data to your server or a service like SendGrid
    // for example by fetching your API route:
    const res = await fetch('/api/send', {
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    // Handle result and clear the form fields
    console.log(result)
    setName('')
    setEmail('')
    setMessage('')
  };

  return (
    <form onSubmit={handleSubmit} style={{ color: 'black' }}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} required />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactUsAnimation;
