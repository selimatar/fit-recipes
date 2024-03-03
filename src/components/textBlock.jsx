import React from 'react';

const TextBlock = ({ title, text }) => {
  return (
    <div className="p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-m">{text}</p>
    </div>
  );
};

export default TextBlock;