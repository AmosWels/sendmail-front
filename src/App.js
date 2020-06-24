import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [price, setPrice] = useState('')
  const [name, setName] = useState('')
  const handlePriceChange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  }

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleSubmit = () => {
    fetch('http://127.0.0.1:5000/sendmail')
      .then(res=>res.json())
      .then(data => console.log(data))
  }

  return (
    <div className="card">
    <div className="card-body">
      <div className="form-group">
        <label>Name:</label>
        <input type="email" name="name" onChange={handleNameChange} value={name} className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input type="text" name='price' onChange={handlePriceChange} value={price} className="form-control" id="pwd" />
      </div>
      <button type="submit" className="btn btn-default" onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
}

export default App;
