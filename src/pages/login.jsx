import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(null);

  const handleLogin = async () => {
    try {
      console.log('Login button clicked');
      const apiUrl = 'https://staging-vas-app.indofungames.com/1.0/login/users';

      const apiResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });

      const data = await apiResponse.json();
      setResponse(data);

      // If login is successful, you can handle it accordingly
      if (apiResponse.ok) {
        console.log('Login successful');
        // Navigate to another page or perform further actions
      } else {
        // Handle login failure, e.g., display an error message
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="bg-cover bg-black min-h-screen text-white">
      <div className="flex justify-center pt-10 text-2xl">
        <p>Login page</p>
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
        <label className="pt-3">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mx-2 outline text-black"
        />
      </div>
      <div>
        <button onClick={handleLogin} className="flex mx-auto p-5 bg-yellow-400 mt-5 text-black">
          Login
        </button>
      </div>
      {response && (
        <div>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
