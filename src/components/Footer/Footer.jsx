import React from 'react';
import Select from '../Select';
import Container from '../container/Container';

export default function Footer(params) {

    const countries  = ["India","United States","Germany"]
    return(
       <div className='flex items-center justify-around pb-8'>
        <div className='flex flex-col py-14 gap-2'>
            <h5 className='text-fontwhite'>Categories</h5>
            <a className='text-footerlinks' href="">Web Builder</a>
            <a className='text-footerlinks' href="">Hosting</a>
            <a className='text-footerlinks' href="">Data Center</a>
            <a className='text-footerlinks' href="">Robotic-Automation</a>
        </div>
        <div className='flex flex-col py-14 gap-2'>
            <h5 className='text-fontwhite'>Contact</h5>
            <a className='text-footerlinks' href="">Contact</a>
            <a className='text-footerlinks' href="">Privacy Policy</a>
            <a className='text-footerlinks' href="">Terms Of Service</a>
            <a className='text-footerlinks' href="">Categories</a>
            <a className='text-footerlinks' href="">About</a>
        </div>
        <Select options={countries} />
       </div >
    )
};
