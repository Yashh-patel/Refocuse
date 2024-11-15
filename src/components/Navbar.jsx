import React from 'react';
import Button from './Button';

function Navbar() {
    return (
        <div className="max-w-screen-xl mx-auto  py-6 flex items-center ">
            <h4 className='text-white'>Refokuse</h4>
            <div className='text-white flex gap-10 ml-32'>
                {["Home", "Work", "Culture","|","News"].map((elem, index) => (
                    <a href="#" key={index}>
                        {elem}
                    </a>
                ))}
            </div>
            <div className='flex items-end'>
            <Button/>
            </div>
           
        </div>
    );
}

export default Navbar;

  