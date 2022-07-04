import React from 'react';
import chair from './../../assets/images/chair.png'
import chairbg from './../../assets/images/bg.png'
import Mainbutton from '../Shared/Mainbutton';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${chairbg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50px',
        backgroundSize: '80%'
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='pt-5'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Mainbutton>Get Started</Mainbutton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;