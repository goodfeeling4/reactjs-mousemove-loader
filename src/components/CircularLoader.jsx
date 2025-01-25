import { useState, useEffect } from "react";

const CircularLoader = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position when the mouse moves
  const updateCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add event listener to track cursor movement
    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // Define different colors and animations
  const colors = ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-100", "bg-purple-500", "bg-pink-500", "bg-indigo-500"];
  const animations = ["animate-spin duration-150", "animate-pulse duration-200", "animate-bounce duration-300", "animate-ping", "animate-bounce", "animate-pulse duration-500", "animate-spin duration-700"];
  const text = [ 'M', "N", "O", "P", "Q","R","S"]
  // Create 7 lines with different colors and animations
  const lines = colors.map((color, index) => (
    <div
      key={index}
      className={`line ${color} w-12 h-12 absolute pt-3 ${animations[index]}`}
      style={{ top: cursorPosition.y, left: cursorPosition.x, transform: `rotate(${index * 45}deg)`, borderRadius: '100%' }}
    >{text[index]}</div>
  ));

  return <div className="w-screen text-white min-h-screen text-center bg-gray-900 duration-300">
    {lines}</div>;
};

export default CircularLoader;