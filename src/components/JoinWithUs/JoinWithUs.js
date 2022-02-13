import React from 'react';
import logo from "../../images/logo.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import "./JoinWithUs.css"


const JoinWithUs = () => {
    return (
        <div>
            <div className='d-flex flex-wrap px-3 justify-content-between align-items-center'>
                <div className='mb-3'>
                    <img className='w-25' src={logo} alt="" />
                </div>
                <div>
                    <TwitterIcon className='mr-2 border pointer social-btn-icon border-1 rounded-circle fs-1 p-2' />
                    <YouTubeIcon className='mx-2 border social-btn-icon border-1 rounded-circle fs-1 p-2' />
                    <InstagramIcon className='mx-2 border social-btn-icon border-1 rounded-circle fs-1 p-2' />
                    <FacebookOutlinedIcon className='mx-2 social-btn-icon border border-1 rounded-circle fs-1 p-2' />
                </div>
            </div>
        </div>
    );
};

export default JoinWithUs;