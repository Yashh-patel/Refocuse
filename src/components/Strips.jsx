import React from 'react';
import Stripe from './Stripe';

function Strips() {
    var data = [
        { url: "", no: "48" },
        { url: "", no: "2" },
        { url: "", no: "11" },
        { url: "", no: "48" },
        { url: "", no: "2" },
        { url: "", no: "11" },
    ];

    return (
        <div className='flex items-center '>
            {
                data.map((item, index) => {
                    return <Stripe key={index} url={item.url} no={item.no} />;
                })
            }
        </div>
    );
}

export default Strips;
