import React from 'react';

const Service = ({ service, setTreatment }) => {
    const {name, slot} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center ">
                <h2 className=" text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {slot.length? <span>{slot[0]}</span>: <span className='text-red-500'>No slot available</span> }
                </p>
                <p>{slot.length} {slot.length>1? 'spaces': 'space'} available!</p>
                <div className="card-actions justify-center">

                    <label 
                    for="booking-modal" 
                    disabled={slot.length===0} 
                    onClick= {()=>setTreatment(service)}
                    className="btn btn-sm btn-secondary bg-gradient-to-r from-secondary to-primary uppercase text-white"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;