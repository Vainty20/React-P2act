import React from 'react';
import './App.css';
import Button from './components/button';
import TextField from './components/textfield';
import H2 from './components/h2';
import Cite from './assets/cite.jpg'
import Image from './assets/img2.png'

function App() {
  return (
    <div className="App">
      <H2>P2 INDIVIDUAL ACTIVITY PART2</H2>
      <Button bgColor="red" text="CANCEL" rounded />
      <Button bgColor="blue" text="SUBMIT" rounded />
      <TextField id="text-field-1" bgColor="transparent" rounded border />
      <TextField id="text-field-2" bgColor="transparent" rounded border />
      <TextField id="text-field-3" bgColor="green" rounded border />
      <TextField id="text-field-4" bgColor="green" rounded border />
      <div className='cite'>
        <img
          src={Cite}
          alt="CITE Logo"
          style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '30px' }}
        />
        <img
          src={Cite}
          alt="Image 2"
          style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '30px' }}
        />
        </div>
        <div className='img'>
        <img
          src={Image}
          alt="Image 3"
          style={{ width: '200px', height: '200px', borderRadius: '20px', margin: '30px' }}
        />
        <img
          src={Image}
          alt="Image 4"
          style={{ width: '200px', height: '200px', borderRadius: '20px', margin: '30px' }}
        />
      </div>
    </div>
  );
}

export default App;