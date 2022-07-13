import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date = {date} setDate= {setDate}></AppoinmentBanner>
            <AvailableAppoinment date = {date} ></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;