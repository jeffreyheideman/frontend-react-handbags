import React from 'react';
import './App.css';
import Button from "./components/Button";


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          <Button name="to the collection" disabled={false}/>
          <Button name="shop all bags" disabled={false}/>
          <Button name="pre-orders" disabled={true}/>
      </nav>
      </>
  );
}

export default App;



