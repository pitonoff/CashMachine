import React from 'react';
import './SubscribeBlock.css';

const SubscribeBlock: React.FC = () => {
  return (
    <div className="subscribe-block">
      <img src="./git.svg" alt="GitHub Icon" />
      <div className="text">
        <p>Subscribe on GitHub</p>
        <a href="https://github.com/pitonoff" target="_blank" rel="noopener noreferrer">
          Follow me on GitHub
        </a>
      </div>
    </div>
  );
};

export default SubscribeBlock;
