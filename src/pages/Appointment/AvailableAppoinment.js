import { format } from 'date-fns/esm';
import React from 'react';

const AvailableAppoinment = ({date}) => {
    return (
        <div>
            <h4 className='text-xl text-secondary text-center font-bold'>Available Services on {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailableAppoinment;