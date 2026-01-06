import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const logo = 'https://icons.veryicon.com/png/o/miscellaneous/government-icon/social-public-welfare.png';

const TopNavbar = () => {
    const navigate = useNavigate();

    // Check user session
    const user = JSON.parse(localStorage.getItem("user"));

    // Logout Function
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div id="top-nav" className="flex justify-between items-center bg-slate-50 px-4 py-2 shadow-sm">
            <div className='flex gap-2 items-center'>
                <img className='w-12 h-12' src={logo} alt="Logo" />
                <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 
                                 bg-clip-text text-transparent font-semibold text-2xl">
                    Nagrik Sarkar
                </span>
            </div>

            <p className='font-semibold tex-base text-slate-600'>न्याय और अवसर पहुचेंगे घर-घर</p>

            <div className="flex gap-2 items-center">

                {/* If user is logged in */}
                {user ? (
                    <>
                        <Link to="/dashboard">
                            <button className="bg-green-600 hover:bg-green-500 rounded-md px-4 py-[6px] text-white">
                                Dashboard
                            </button>
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-400 rounded-md px-4 py-[6px] text-white"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    // If user is not logged in
                    <>

                        <Link to="/register-for-volunteer">
                            <button className="bg-indigo-500 hover:bg-indigo-400 rounded-md px-4 py-[6px] text-gray-50">
                                Register for Volunteer
                            </button>
                        </Link>
                        <Link to="/login">
                            <button className="bg-indigo-500 hover:bg-indigo-400 rounded-md px-4 py-[6px] text-gray-50">
                                Log In
                            </button>
                        </Link>

                        <Link to="/register">
                            <button className="bg-indigo-500 hover:bg-indigo-400 rounded-md px-4 py-[6px] text-gray-50">
                                Register
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default TopNavbar;
