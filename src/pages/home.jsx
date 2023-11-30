import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'))

    const handleRegisterClick = () => {
        // Use the navigate function to move to the Register page
        navigate('/register');
      };
      const handleLoginClick = () => {
        navigate('/login')
      }
    return (
        <>
            {/* Body */}
            <div class="text-5xl flext text-center pt-20">
                Home page
            </div>
            {user && 
            <div class="flex justify-center m-10 text-4xl">
                Welcome, {user.name}
            </div>
            }
            {/* login */}
            <div class="flex justify-center mt-20">
                <div class="mx-5">
                    <button class="bg-green-400 p-5 w-[100px]" onClick={handleLoginClick}>Login</button>
                </div>
                {/* register */}
                <div class="mx-5">
                    <button class="bg-yellow-400 p-5 w-[100px]" onClick={handleRegisterClick}>Register</button>
                </div>
            </div>
        </>
    )
}