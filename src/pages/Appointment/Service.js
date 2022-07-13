import React from 'react';

const Service = ({ service }) => {
    const {name, slot} = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {slot.length? <span>{slot[0]}</span>: <span className='text-red-500'>No slot available</span> }
                </p>
                <p>{slot.length} {slot.length>1? 'spaces': 'space'} available!</p>
                <div class="card-actions justify-center">
                    <button disabled={slot.length===0} class="btn btn-secondary uppercase text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;