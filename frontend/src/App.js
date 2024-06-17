import React, { useState, useEffect } from 'react';

import './App.css';
import Routes from './components/Router'
import Loader from './components/loader';





function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
         
          <div >
        
            <Routes />
          </div>
          
        </>
      )}
    </>
  );
};
  


export default App;