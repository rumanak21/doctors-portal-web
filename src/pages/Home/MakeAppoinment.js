import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Mainbutton from '../Shared/Mainbutton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 mx-5'>
                <h3 className='text-xl text-primary font-bold py-2'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet expedita dolorem optio atque quos nulla reprehenderit asperiores officiis mollitia, vel quibusdam ad odio praesentium iste, in sint saepe beatae non! Quaerat esse tempora rem ut eveniet quo sunt dignissimos atque?</p>
                <Mainbutton>Get Started</Mainbutton>
            </div>
        </section>
    );
};

export default MakeAppoinment;