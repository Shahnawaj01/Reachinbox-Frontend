import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    // State to manage theme
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Toggle theme function
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Apply theme class to body
    useEffect(() => {
        document.body.className = isDarkMode ? 'bg-black text-white' : 'bg-white text-black';
    }, [isDarkMode]);

    return (
        <div className={`max-w-[1440px] h-screen m-auto flex flex-col justify-between ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="w-full h-16 flex justify-center items-center border border-slate-800">
                <img src="https://i.ibb.co/bPKTfBC/Screenshot-2024-07-30-190747.png" alt="reachinbox-logo" className="h-7" />
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className={`m-auto w-[460px] h-auto md:h-[312px] rounded-2xl border py-6 px-10 ${isDarkMode ? 'bg-[#111214] border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
                    <div className='w-[380px] m-auto'>
                        <p className='text-xl mb-6'>Create new account</p>
                        <div className='rounded border border-gray-500 h-12 flex justify-center items-center gap-2.5 mb-12'>
                            <img src="https://static.vecteezy.com/system/resources/previews/013/760/951/non_2x/colourful-google-logo-in-dark-background-free-vector.jpg" alt="" className='bg-black rounded-full h-5 mt-0.5'/>
                            <Link to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-frontend.netlify.app/desktop" className='text-sm text-gray-400 cursor-pointer'>Sign Up with Google</Link>
                        </div>
                        <p className='w-[195px] h-12 bg-[#4B63DD] rounded m-auto text-center pt-2.5 mb-6 cursor-pointer'>Create an account</p>
                        <p className='text-base text-gray-500'>Already have an account? <span className='text-blue-500 cursor-pointer'>Sign In</span></p>
                    </div>
                </div>
            </div>
            <div className="w-full h-8 flex justify-center items-center border border-slate-800">
                <p className='h-5 text-gray-600 text-xs'>©️ 2023 Reachinbox. All rights reserved.</p>
            </div>
            <div className="absolute top-4 right-4 flex items-center">
                <button 
                    onClick={toggleTheme} 
                    className={`relative w-12 h-6 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} flex items-center cursor-pointer transition-colors duration-300`}
                >
                    <div 
                        className={`absolute w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
                    />
                </button>
            </div>
        </div>
    );
};

export default Login;
