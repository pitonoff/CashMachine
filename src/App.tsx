import React, { useState, useEffect } from 'react';
import './index.css';
import Counter from './components/Counter';
import SubscribeBlock from './components/SubscribeBlock';
import './BanknoteAnimation.css';
import Preloader from './Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const svgLoader = setTimeout(() => {
      // Simulate SVG loading time (e.g., 3 seconds)
      setLoading(false);
    }, 5000);

    return () => clearTimeout(svgLoader);
  }, []); 

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <div className="background-container">
            <div className="background" />
          </div>
          <div className="content">
            <Counter />
            <SubscribeBlock />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
