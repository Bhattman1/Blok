"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

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
  

  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoaded, setLoaded] = useState(false);
  const [isBlackScreenDone, setBlackScreenDone] = useState(false);
  const [isTextVisible, setTextVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTextVisible(true);
            setTimeout(() => {
                setLoaded(true);
                setTimeout(() => {
                    setBlackScreenDone(true);
                    setTimeout(() => {
                        setShowOverlay(false);
                    }, 1000);
                }, 2000);
            }, 1000);
        }, 2000);
        
    }, []);



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
        setTimeout(() => advanceStage(), 3000);  // delay of 3 seconds
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
      {showOverlay && (
          <>
              {!isBlackScreenDone && (
                  <div
                      className={`font-Manrope fixed inset-0 bg-black z-100 flex justify-center items-center ${
                          isLoaded ? "animate-slideOut" : "animate-slideDown"
                      }`}
                  ></div>
              )}
              <div
                  className={`font-Manrope fixed inset-0 flex justify-center items-center z-60 transition-colors duration-500 ${
                      isLoaded ? "text-black" : "text-custom-gray"
                  }`}
              >
                  <p
                      className={`
                          text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl text-center m-6 ${
                              isBlackScreenDone ? "opacity-0 animate-fadeOut" : isTextVisible ? "transition-opacity duration-500 opacity-100" : "opacity-0"
                          }`}
                      dangerouslySetInnerHTML={{ __html: stages[0].question }}
                  >
                  </p>
              </div>
          </>
      )}
      {!showOverlay && (
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
                    style={{ width: "600px", marginLeft: '190px'}}
                >
                    <div className="flex flex-col items-start mb-10">
                    <p
    className={`question-text transition-opacity duration-500 text-xl ${
        animate ? "animate-fadeOut" : "animate-fadeIn"
    }`}
  


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
                                className="placeholder-gray-500 bg-transparent focus:outline-none mt-10 md:placeholder-lg placeholder-sm"
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
    className="bottom-text bottom-left-content absolute md:bottom-10 bottom-16 left-5"
>
    <p>blokstudios@gmail.com</p>
</div>

{/* Instagram content */}
<div 
    className="bottom-text absolute bottom-4 left-5"
>
    <a href="https://www.instagram.com/blok.studios/" target="_blank" rel="noopener noreferrer">Connect: Instagram </a>
    <FontAwesomeIcon icon={faInstagram} />
</div>

{/* Bottom right content on larger screens */}
<div 
    className="hidden md:block bottom-text bottom-right-content absolute bottom-4 right-5"
>
    <p>All rights reserved Copyright © BLOK STUDIOS 2023</p>
</div>

{/* Bottom right content on small screens */}
<div 
    className="md:hidden bottom-text bottom-right-content absolute bottom-10 left-5"
>
    <p>All rights reserved Copyright © BLOK STUDIOS 2023</p>
</div>
</div>


      )}
  </>
);
;}

export default ContactUsAnimation;