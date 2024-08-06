// src/components/Events.js

import React, { useState, useEffect } from 'react';

const events = [
  {
    id: 1,
    videoSrc: 'src/assets/Videos/Official Teaser - Sid Sriram Live in Concert, Coimbatore, November 9th.mp4'
  },
  {
    id: 2,
    videoSrc: 'src/assets/Videos/Coldplay - Music Of The Spheres World Tour 2023 (Official trailer).mp4',
    
  },
  {
    id: 3,
    videoSrc: 'src/assets/Videos/videoplayback.mp4',
  
  },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90vw',
    maxWidth: '1200px',
    height: '90vh',
    maxHeight: '800px',
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)', 
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
    position: 'relative',
    margin: 'auto',
    padding: '20px',
    borderRadius: '20px', 
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', 
  };

  const headingContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '12px',
    zIndex: 2,
    textAlign: 'center',
    marginBottom: '20px',
  };

  const headingStyle = {
    margin: 0,
    fontSize: '2rem',
    color: '#333',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  };

  const sliderContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  const sliderStyle = {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  const slidesContainerStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
<<<<<<< HEAD
    transform: 'translateX(-${currentIndex * 100}%)',
=======
    transform: `translateX(-${currentIndex * 100}%)`,
>>>>>>> 0b0fd22644848ef845f7a94ef47fe1127c5d0c4b
    width: '100%',
    height: '100%',
  };

  const slideStyle = {
    minWidth: '100%',
    height: '100%',
    boxSizing: 'border-box',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain', 
    borderRadius: '12px',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    padding: '0.8rem',
    cursor: 'pointer',
    zIndex: 1,
    fontSize: '1.5rem',
    borderRadius: '50%',
    transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const prevButtonStyle = {
    ...buttonStyle,
    left: '20px',
  };

  const nextButtonStyle = {
    ...buttonStyle,
    right: '20px',
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={containerStyle}>
      <div style={headingContainerStyle}>
        <h1 style={headingStyle}>Upcoming Events</h1>
      </div>
      <div style={sliderContainerStyle}>
        <div style={sliderStyle}>
          <div style={slidesContainerStyle}>
            {events.map((event) => (
              <div key={event.id} style={slideStyle}>
                <video src={event.videoSrc} controls style={videoStyle} />
              </div>
            ))}
          </div>
          <button style={prevButtonStyle} onClick={handlePrev}>
            ‹
          </button>
          <button style={nextButtonStyle} onClick={handleNext}>
            ›
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem;
            padding: 10px;
          }
          button {
            font-size: 1.2rem;
            padding: 0.5rem;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          h1 {
            font-size: 1.8rem;
            padding: 10px;
          }
          button {
            font-size: 1.4rem;
            padding: 0.6rem;
          }
        }
        @media (min-width: 1025px) {
          h1 {
            font-size: 2rem;
            padding: 10px 20px;
          }
          button {
            font-size: 1.6rem;
            padding: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}; 

<<<<<<< HEAD
export default Events;
=======
export default Events;
>>>>>>> 0b0fd22644848ef845f7a94ef47fe1127c5d0c4b
