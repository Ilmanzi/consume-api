import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const apiUrl = 'https://staging-vas-app.indofungames.com/1.0/login/users';

            const response = await axios.post(apiUrl, {
                email,
                password
            })

            const data = response.data;
            console.log(data)

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
        </div>
    );
}
