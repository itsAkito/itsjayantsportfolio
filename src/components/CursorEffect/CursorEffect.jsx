import React, { useState, useEffect } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trailPositions, setTrailPositions] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      // Create trail effect
      setTrailPositions(prev => {
        const newTrail = [...prev, { x: clientX, y: clientY }];
        return newTrail.slice(-20); // Keep only last 20 positions
      });

      // Detect hover on interactive elements
      const target = e.target;
      const isClickable = 
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.matches('a, button, [role="button"]');
      
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      
      {/* Cursor glow ring */}
      <div
        className="cursor-ring"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Trail effect */}
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (index / trailPositions.length) * 0.6,
          }}
        />
      ))}
    </>
  );
};

export default CursorEffect;
