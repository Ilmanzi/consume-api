import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(null);

  const handleRegister = async () => {
    try {
      console.log('Register button clicked');
      const apiUrl = 'https://staging-vas-app.indofungames.com/1.0/register/users/registermain';

      const apiResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          Name: name,
          Password: password,
        }),
      });

      const data = await apiResponse.json();
      setResponse(data);

      if (data.is_success === 1) {
        // Registration successful
        console.log('Registration successful');
        console.log('User ID:', data.data.userId);
        console.log('Token:', data.data.token);
        console.log('Entry By:', data.data.entry_by);
        // Display success message to the user
        alert('Registration successful!\nUser ID: ' + data.data.userId);
        // You can navigate to another page or perform further actions here
      } else {
        // Registration failed, handle the error
        console.error('Registration failed:', data);
        // Display error message to the user
        alert('Registration failed!\nError: ' + data.error_message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="bg-cover bg-black min-h-screen text-white">
      <div className="flex justify-center pt-10 text-2xl">
        <p>Register page</p>
      </div>
      {/* form */}
      <div className="flex flex-col items-center mt-10">
        <label className="pt-3">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mx-2 outline text-black"
        />
        <label className="pt-3">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 mx-2 outline text-black"
        />
        <label className="pt-3">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mx-2 outline text-black"
        />
      </div>
      <div>
        <button onClick={handleRegister} className="flex mx-auto p-5 bg-yellow-400 mt-5 text-black">
          Register
        </button>
      </div>
      {response && (
        <div>
          <h3>API Response:</h3>
          <p>is_success: {response.is_success}</p>
          {response.is_success === 1 && (
            <div>
              <p>User ID: {response.data.userId}</p>
              <p>Token: {response.data.token}</p>
              <p>Entry By: {response.data.entry_by}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Register;
