import React, { useEffect, useState } from 'react';
import './Form.css'
export default function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value})
    //console.log(inputData);

  }
  useEffect(() => {
    console.log('registered');
    console.log(flag);
  },[flag])
  function handleSubmit(e) {
    e.preventDefault();
    if (! inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
      return;
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre>{(flag) ? <h2 className='ui-define'>Hello { inputData.name} You have Registered Successfully ! </h2>: ""}</pre>
    <form className='container' onSubmit={handleSubmit}>
      <div className='header'>
        <h1>Registration Form</h1>
      </div>
      <div>
        <input type='text' placeholder='Enter Your Name'   value={inputData.name} onChange={handleData} name='name'></input>
      </div>
       <div>
        <input type='text' placeholder='Enter Your Email'  value={inputData.email} onChange={handleData} name='email'></input>
      </div>
       <div>
        <input type='text' placeholder='Enter Your Password'  value={inputData.password} onChange={handleData} name='password'></input>
      </div>
      <div>
        <button type='submit' className='button'>Submit</button>
      </div>

      </form>
      </>
  )
}
