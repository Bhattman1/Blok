"use client"


import React, { useState, FormEvent, ChangeEvent } from 'react';
import emailjs from 'emailjs-com';

const stages = [
  { question: "Not sure where to start? Let's point you in the right direction.", inputName: "" },
  { question: "What is your first and last name?", inputName: "from_name" },
  { question: "What is your email?", inputName: "email_id" },
  { question: "What did you want to enquire about?", inputName: "message" },
];

const ContactUsAnimation = () => {
  const [stage, setStage] = useState(0);
  const [name, setName] = useState("");
  const [email_id, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [animate, setAnimate] = useState(false);

  const updateField = (name: string, value: string) => {
    switch (name) {
      case "from_name": setName(value); break;
      case "email_id": setEmail(value); break;
      case "message": setMessage(value); break;
      default: break;
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateField(stages[stage].inputName, event.target.value);
  }

  const advanceStage = (event: FormEvent) => {
    event.preventDefault();
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      setStage(prevStage => prevStage + 1 === stages.length ? 0 : prevStage + 1);
    }, 500);
  }

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAnimate(true);
    
    emailjs.send('service_j6mz1kv', 'template_62l9e17', {
      from_name: name,
      email_id: email_id,
      message: message
    }, 'QZWDImmJVfqYWJ8Wl')
      .then((result) => {
          console.log(result.text);
          setName('');
          setEmail('');
          setMessage('');
          setConfirmation('Email sent successfully!');
          setTimeout(() => {
            setAnimate(false);
            setStage(0);
            setConfirmation('');
          }, 500);
      }, (error) => {
          console.log(error.text);
          setConfirmation('An error occurred while sending the email.');
      });
  };

  return (
    <div style={{ color: 'black', paddingLeft: '40vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
        <form className="contact-form" onSubmit={stage < stages.length - 1 ? advanceStage : sendEmail}>
            <div className="flex flex-col items-start mb-10">
                <p className={`font-bold transform transition-all duration-500 text-xl ${animate ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`} style={{ width: '500px' }}> {/* Here's the fixed width */}
                    {stages[stage].question}
                </p>

                {stage === 0 && 
                    <input type="submit" value="Next" />
                }

                {stages[stage].inputName && 
                    <input
                        type={stages[stage].inputName === 'email_id' ? 'email' : 'text'}
                        name={stages[stage].inputName}
                        value={{ from_name: name, email_id: email_id, message: message }[stages[stage].inputName]}
                        onChange={handleInputChange}
                        placeholder="Type your answer here..."
                        className="placeholder-gray-500 bg-transparent focus:outline-none mt-2"
                        style={{ borderBottom: '2px solid black' }} 
                        required
                    />
                }

                {stage !== 0 && 
                    <input type="submit" value={stage < stages.length - 1 ? "Next" : "Submit"} className="mt-2" />
                }
            </div>
            {confirmation && <p>{confirmation}</p>}
        </form>
    </div>
);


      }


export default ContactUsAnimation;
