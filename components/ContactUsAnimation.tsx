"use client"


import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';

import emailjs from 'emailjs-com';

const stages = [
  { question: "Not sure where to start? <br> Let's point you in the right direction.<br>", inputName: "" },
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
  const [animate, setAnimate] = useState(true);
  const [isInitialMount, setIsInitialMount] = useState(true); // New state variable

  const goForward = (event: FormEvent) => {
    advanceStage(event);
  };

  const goBackward = () => {
    setAnimate(true); // Start the fade-out animation for backward transition

    setTimeout(() => {
      setStage(prevStage => (prevStage - 1 + stages.length) % stages.length);

      // Start the fade-in animation after updating the stage
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }, 500);
  };

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

  const autoAdvanceStage = () => {
    if (stage === 0) {
        setTimeout(() => advanceStage(), 2000);  // delay of 3 seconds
    }
  }
  

  const advanceStage = (event?: FormEvent) => {
    if (event) event.preventDefault();
    
    if (stage === stages.length - 1) {
      sendEmail(event as FormEvent<HTMLFormElement>);
      return;
    }
  
    setAnimate(true);  // Start the fade-out animation regardless of the stage
  
    setTimeout(() => {
        setStage(prevStage => (prevStage + 1) % stages.length);
  
        // Start the fade-in animation after updating the stage
        setTimeout(() => {
            setAnimate(false);
        }, 1000);
  
    }, 1000);  // Delay for the fade-out to complete
  };



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
          }, 3000);
      }, (error) => {
          console.log(error.text);
          setConfirmation('An error occurred while sending the email.');
      });
  };

  useEffect(() => {
    
    // Only run the animation when the component first mounts
    if (isInitialMount) {
        setTimeout(() => {
            setAnimate(false);
            setIsInitialMount(false); // Set to false after the initial fade-in
            autoAdvanceStage(); // Auto advance if on stage 0
        }, 100);
    }
}, [isInitialMount]); // Depend on isInitialMount

useEffect(() => {
  // If the stage is the first one, then auto advance
  if (stage === 0 && !isInitialMount) {
    autoAdvanceStage();
  }
}, [stage]); // Watching for changes in stage






return (
  <>
     <style>
      {`
        @media (max-width: 768px) {
            .contact-form:not(.stage-zero) {
                margin-left: 340px; /* Adjust this value as necessary */
            }

            .contact-form, .contact-form p, .contact-form input, .contact-form button {
                font-size: 0.95em; /* This reduces the text size by 20%. Adjust as needed. */
            }

            .bottom-text {
                font-size: 0.7em; /* Making the text smaller */
            }

            .bottom-left-content, .bottom-right-content {
                left: 10px !important;
                bottom: 15px !important;
                right: auto !important;
            }

            .bottom-right-content {
                top: unset !important;
                bottom: 0 !important;
            }
        }
      `}
    </style>



    <div
      style={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
    className={`contact-form ${stage === 0 ? "stage-zero" : ""}`}
    onSubmit={advanceStage}
    style={{ width: "600px" }}
>
        <div className="flex flex-col items-start mb-10">
        <p
    className={`question-text transform transition-all duration-500 text-xl ${
        isInitialMount || animate ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
    } ${stage === 0 ? "question-text" : ""}`} 
    style={{ width: "600px", textAlign: stage === 0 ? "center" : "left" }}
    dangerouslySetInnerHTML={{ __html: stages[stage].question }}
/>


          {stages[stage].inputName && 
            <input
              type={stages[stage].inputName === 'email_id' ? 'email' : 'text'}
              name={stages[stage].inputName}
              value={{ from_name: name, email_id: email_id, message: message }[stages[stage].inputName]}
              onChange={handleInputChange}
              placeholder="type your answer here..."
              className="placeholder-gray-500 bg-transparent focus:outline-none mt-10"
              style={{ borderBottom: '2px solid black' }} 
              required
            />
          }

          <div className="flex mt-2">
            {stage !== 0 && (
              <button type="button" onClick={goBackward} className="mr-4 mt-2">
                ←
              </button>
            )}
            {(stage !== 0 || stage === stages.length - 1) && (
              <button type="submit" className="mt-2">
                →
              </button>
            )}
          </div>
        </div>
        {confirmation && <p>{confirmation}</p>}
      </form>

       {/* Bottom left content */}
      
       <div 
        className="bottom-text bottom-left-content"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px"
        }}
      >
        <p>blokstudios@gmail.com</p>
        <a href="https://www.instagram.com/blok.studios/" target="_blank" rel="noopener noreferrer">Connect: Instagram</a>
      </div>

      {/* Bottom right content */}
      <div 
        className="bottom-text bottom-right-content"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px"
        }}
      >
        <p>All rights reserved Copyright © BLOK STUDIOS 2023</p>
      </div>
    </div>
  </>
);;}

export default ContactUsAnimation;