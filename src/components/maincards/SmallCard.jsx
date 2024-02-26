import React from 'react';

import image from "../../assets/download.png"
import Buttons from '../Buttons';
export default function SmallCard({imgSrc,title,discountOffer,desc,price1,price2}) {
    return(
        <div className=' smallcard min-w-56 flex flex-col items-center p-4 gap-8  rounded-lg '>
            <div className=' w-100 bg-darkgrey' >
                <img className='w-100' src={image} alt="" />
            </div>
            <div className='flex flex-col items-start gap-1'>
                <div className='flex gap-4 text-sm text-darkblue'>
                    <span>20 % off</span><span>limited time</span>
                </div>
                <h5 className=' self-center m-0 text-smallcardgrey' >{title}</h5>
                <p className='text-smallcardgrey'>{desc}</p>
                <div className='flex gap-2 mt-2 text-fontdarkgrey'><p>{price1}</p> <span>{price2} </span> <span>({discountOffer} OFF)</span></div>
                <Buttons  className= "viewbtn bg-blue mt-1 hover:bg-darkblue text-white w-full  py-1 rounded-md" name="View Deal" />
            </div>
        </div>
    )
};
