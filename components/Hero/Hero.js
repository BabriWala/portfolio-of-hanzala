"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';

const Hero = () =>{

    const TYPING_SPEED = 150;
    const DELETING_SPEED = 30;

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);
    
    useEffect(() => {
        handleType();
      }, []);
    
      const handleType = () => {
        const fullText = "Hello World";
    
        setText((prevState) =>
          isDeleting
            ? fullText.substring(0, prevState.length - 1)
            : fullText.substring(0, prevState.length + 1)
        );

        setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);

        if (!isDeleting && text === fullText) {
            console.log("inside")
          setTimeout(() => setIsDeleting(true), 500);
        } else if (isDeleting && text === '') {
          setIsDeleting(false);
        }
    
        setTimeout(handleType, typingSpeed);
      };
    

    const message = '<p className="m-0">Hellow world</p><p>Hellow world</p>'
    return (
        <div className="h-screen bg-[#13CE66]">
            {text}
        </div>
    )
}

export default Hero;