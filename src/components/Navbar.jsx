import React from 'react';
import Button from './Button';

function Navbar() {
    return (
        <div className="max-w-screen-xl mx-auto   flex items-center justify-between border-b-[1px] border-zinc-700">
            <h4 className='text-white'>Refokuse</h4>
            <div className='text-white flex gap-10 ml-32'>
                {["Home", "Work", "Culture","|","News"].map((elem, index) => (
                    <a  className=' text-sm' href="#" key={index}>
                       {index ==1 && (<span style={{boxShadow:"0 0 0 0.15em #00ff19"}}className='inline-block w-1 h-1 rounded-full bg-green-500'></span>)}
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

  