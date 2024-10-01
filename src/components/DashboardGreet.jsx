import React from 'react';
import IconBell from './IconBell';
import SearchIcon from './SearchIcon';
import image from '../assets/avatar.png'
import IconCaretDown from './IconCaretDown';

export default function DashboardGreet() {
    return (
        <div className="flex flex-col-reverse sm:flex-row items-start justify-between">
            <div className="sm:w-1/2 w-full">
                <h1 className="text-2xl bold-it">Welcome Back, Marci</h1>
                <p className="text-gray-500 mt-3 text-sm">Here's the information about all your orders</p>
            </div>

            <div className='flex'>
                <div className='flex items-center justify-between'>
                    <SearchIcon />
                    <IconBell />
                    {/* <img src={image} alt="user avatar" className='mr-2'/> */}
                </div>

                <div className='flex items-center'>
                <img src={image} alt="user avatar" className='mr-2'/>
                    <p className='text-sm mr-1 font-medium'>Marci Fumons</p>
                    <IconCaretDown />
                </div>
            </div>

        </div>
    );
}
