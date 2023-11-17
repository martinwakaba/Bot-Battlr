import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [bots, setBots] = useState([])
 
    useEffect(() => {
      fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(bots =>{ setBots(bots)
      })
    }, [])

    

    

    


  


  return (
   <>
   
    
   
   </>
  );
}

export default App;
