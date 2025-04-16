import React, { useState, useEffect } from 'react';
import './App.css';
//import SlideBuilder from './components/SlideBuilder';
import Button from './components/Button';

/*
function App() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const response = await fetch("/slides/query-index.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setSlides(json.data);
    } catch (error) {
      console.error("Failed to fetch slides:", error);
    }
  };

  return (
    <div className="App">
      <main>
        <SlideBuilder slides={slides} />
      </main>
    </div>
  );
}
*/


const App = () => {

  /*
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const response = await fetch("query-index.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setSlides(json.data);
    } catch (error) {
      console.error("Failed to fetch slides:", error);
    }
  };
  */
  
  const handleClick = () => {
    console.log('Button was clicked!');
  };


  return (
    <div>
      <h1>Hello, It's my first React App!</h1>
      <h2>Happy Coding!!</h2>
      <Button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white' }}>
        Click Me!
      </Button>
      {/*
      <SlideBuilder slides={slides} />
      */}
    </div>

  );
};

export default App;
