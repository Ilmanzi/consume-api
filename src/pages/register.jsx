// Register.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async () => {
    try {
      const apiUrl = 'https://staging-vas-app.indofungames.com/1.0/register/users/registermain'
      
      const response = await axios.post(apiUrl, {
        email,
        name,
        password
      })

      const data = response.data;
      console.log(data)
      
      if (!data) {
        setError("Registration Failed!")
        
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error(error)
      setError('An unexpected error occurred during registration');
    }
  };

  return (
    <div class="bg-cover bg-black min-h-screen text-white">
      <div class="flex justify-center pt-10 text-2xl">
        <p>Register page</p>
      </div>
      {/* form */}
      <div class="flex flex-col items-center mt-10">
        <label class="pt-3">Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} class="p-2 mx-2 outline text-black"></input>
        <label class="pt-3">Name</label>
        <input onChange={(e) => setName(e.target.value)} class="p-2 mx-2 outline text-black"></input>
        <label class="pt-3">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' class="p-2 mx-2 outline text-black"></input>
      </div>
      <div>
        <button onClick={handleRegister} class="flex mx-auto p-5 bg-yellow-400 mt-5 text-black">Register</button>
      </div>
    </div>
  );
}

export default Register;
