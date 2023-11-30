import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleRegister = () => {
        navigate('/register')
    }

    const handleLogin = async () => {
        try {
            const apiUrl = 'https://staging-vas-app.indofungames.com/1.0/login/users';
            const response = await axios.post(apiUrl, {
                email,
                password
            })

            const data = response.data.data;
            console.log(data)
            if (data.m) {
                setError('Login failed')
            } else {
                localStorage.setItem('user', JSON.stringify(data))
                navigate('/')
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
            <div class="flex justify-center">
                <button onClick={handleRegister} className=" p-5 m-5 w-24 bg-gray-400 mt-5 text-black">
                    Register
                </button>
                <button onClick={handleLogin} className="p-5 m-5 w-24 bg-yellow-400 mt-5 text-black">
                    Login
                </button>
            </div>
            { error && 
            <div class="flex justify-center mt-10">
                <div>Email atau password salah!</div>
            </div>
            }
        </div>
    );
}
