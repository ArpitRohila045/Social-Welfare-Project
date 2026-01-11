import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from '../Utils/Button';
import RegisterForVolunteer from '../../pages/Auth/RegisterForVolunteer';

const logo = 'https://icons.veryicon.com/png/o/miscellaneous/government-icon/social-public-welfare.png';

const UserLoginNavbar = () => {
    return (
        <>
            <Link to="/dashboard">
                <Button children="Dashborad" />
            </Link>
            <Button onClick={handleLogout} children="Log out" />
        </>
    );
};

const UserLogoutNavbar = () => {
    return (
        <>
            <Link to="/register-for-volunteer">
                <Button children="Register for Volunteer" />
            </Link>

            <Link to="/login">
                <Button children="Log In"/>
            </Link>

            <Link to="/register">
                <Button children="Register" />
            </Link>
                    
        </>
    );
};


const TopNavbar = ({mobileMenuOpen, setMobileMenuOpen}) => {
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

            <p className='hidden md:block font-semibold tex-base text-slate-600'>न्याय और अवसर पहुचेंगे घर-घर</p>

            <div className="hidden md:flex gap-2 items-center">
                {/* If user is logged in */}
                {user ? (
                    <UserLoginNavbar />
                ) : (
                    // If user is not logged in
                    <UserLogoutNavbar/>
                )}
            </div>

            {/* Mobile Menu Button */}

            <Button children="☰" className='md:hidden bg-white text-2xl' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}/>
        </div>
    );
};

export default TopNavbar;
