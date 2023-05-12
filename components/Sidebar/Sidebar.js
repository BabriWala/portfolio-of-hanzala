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
                <DarkModeIcon className="mb-2 cursor-pointer"></DarkModeIcon>
                <LightModeIcon className="cursor-pointer"></LightModeIcon>
            </div>
            <div className="flex flex-col mx-auto">
                <HomeRoundedIcon className="mb-2 cursor-pointer"></HomeRoundedIcon>
                <PersonRoundedIcon className="mb-2 cursor-pointer"></PersonRoundedIcon>
                <BusinessCenterRoundedIcon className="mb-2 cursor-pointer"></BusinessCenterRoundedIcon>
                <AcUnitIcon className="mb-2 cursor-pointer"></AcUnitIcon>
                <PhoneIcon className="cursor-pointer"></PhoneIcon>
            </div>
            <div className="flex flex-col mx-auto">
                <GitHubIcon className="mb-2 cursor-pointer"></GitHubIcon>
                <LinkedInIcon className="mb-2 cursor-pointer"></LinkedInIcon>
                <FacebookIcon className="mb-2 cursor-pointer"></FacebookIcon>
            </div>
        </div>
    );
};

export default Sidebar;