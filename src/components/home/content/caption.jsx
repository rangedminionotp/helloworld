import React, { useEffect, useState } from 'react';

function Caption() {
  const textArray = ["Software Developer", "Web App Developer", "Mobile App Developer"];
  const newTextDelay = 2000;

  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const cursorSpan = document.querySelector(".cursor");

    const type = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        setText((prevText) => prevText + textArray[textArrayIndex][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          erase();
        }, newTextDelay);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        setText((prevText) => prevText.slice(0, charIndex - 1));
        setCharIndex((prevCharIndex) => prevCharIndex - 1);
      } else {
        setIsTyping(false);
        setTextArrayIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setTimeout(() => {
          setIsTyping(true);
        }, 500); // Delay before typing the next item
      }
    };

    const typingInterval = setInterval(() => {
      if (isTyping) {
        cursorSpan.classList.add("typing");
        type();
      } else {
        cursorSpan.classList.remove("typing");
        erase();
      }
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  }, [textArrayIndex, charIndex, isTyping, textArray, newTextDelay]);

  return (
    <div className="container">
      <p>
        <span className="typed-text">{text}</span>
        <span className="cursor">&nbsp;</span>
      </p>
    </div>
  );
}

export default Caption;
