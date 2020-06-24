import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import ReactLoading from 'react-loading';
import './App.css';

function App() {
  const [price, setPrice] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loader, setLoader] = useState(false)
  const handlePriceChange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  }

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handleSubmit = () => {
    setLoader(true)
    axios.post('https://sendflaskmail20.herokuapp.com/sendmail',{
      data: {
        name: name,
        price: price,
        email:email
      }
    })
      .then(res => {
        swal('Your email has been Sent Succesfully')
        setPrice('')
        setName('')
        setEmail('')
        setLoader(false)
        console.log(res)
      }) 
  }

  return (
    <div className="container">
    <br/>
    <div className="card">
    <div className="card-title"> 
    <h3 style={{position:'center'}}>Send in a Request for Agro-chemicals</h3>
    </div>
    <div className="card-body">
      <div className="form-group">
        <label>*Full Name:</label>
        <input type="email" disabled={loader} placeholder="Enter your full name" name="name" onChange={handleNameChange} value={name} className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label>*Price (ugx):</label>
        <input type="number" disabled={loader} placeholder="Enter your price (shs)" name='price' onChange={handlePriceChange} value={price} className="form-control" id="pwd" />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input disabled={loader} type="email" placeholder="Enter additional optional Email" name='email' onChange={handleEmailChange} value={email} className="form-control" id="pwd" />
      </div>
      <div class="ui active inline loader"></div>
      <button type="submit" disabled={loader} className="btn btn-default" onClick={handleSubmit}>Submit</button>
      {loader ? <ReactLoading type="bubbles" color="black" height={70} width={70} />:""}
    </div>
    </div>
    </div>
  );
}

export default App;
