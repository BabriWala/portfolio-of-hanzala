"use client"
import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import AcUnitIcon from '@mui/icons-material/AcUnit';    
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Sidebar = () => {
    return (
        <div className='w-16 top-0 shadow-lg right-0 h-full border fixed flex flex-col justify-between py-5'>
            <div className="flex flex-col mx-auto">
                <DarkModeIcon className="mb-2 cursor-pointer duration-500 hover:rotate-[360deg] transition-all"></DarkModeIcon>
                <LightModeIcon className="cursor-pointer duration-500 hover:rotate-[360deg] transition-all"></LightModeIcon>
            </div>
            <div className="flex flex-col mx-auto">
                <HomeRoundedIcon className="mb-2 cursor-pointer duration-500 hover:rotate-[360deg] transition-all"></HomeRoundedIcon>
                <PersonRoundedIcon className="mb-2 cursor-pointer duration-500 hover:rotate-[360deg] transition-all"></PersonRoundedIcon>
                <BusinessCenterRoundedIcon className="mb-2 cursor-pointer duration-500 hover:rotate-[360deg] transition-all"></BusinessCenterRoundedIcon>
                <AcUnitIcon className="mb-2 cursor-pointer duration-500 hover:rotate-[360deg] transition-all"></AcUnitIcon>
                <PhoneIcon className="cursor-pointer duration-500 hover:rotate-[360deg] transition-all"></PhoneIcon>
            </div>
            <div className="flex flex-col mx-auto">
                <GitHubIcon className="mb-2 cursor-pointer duration-500 hover:rotate-[360deg] transition-all"></GitHubIcon>
                <LinkedInIcon className="mb-2 cursor-pointer duration-500 hover:rotate-[360deg] transition-all"></LinkedInIcon>
                <FacebookIcon className="mb-2 cursor-pointer duration-500 hover:rotate-[360deg] transition-all"></FacebookIcon>
            </div>
        </div>
    );
};

export default Sidebar;