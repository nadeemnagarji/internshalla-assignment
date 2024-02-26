import React, { useState } from 'react';
import Buttons from '../Buttons';
import image from "../../assets/download.png"

export default function Card({desc,rating,stars,review,title,highlight,tag,imgSrc}) {
    const shortHighlight =` <span class="text-fontgrey">${highlight.slice(0,200)}<span><span class="read-more"> ReadMore</span>`
    const longHighlight = `<span class="text-fontgrey">${highlight}<span> <span class="read-more"> Read Less</span>  `

    const [toggle,setToggle] = useState(false)
    return(
        <div className='flex w-full gap-10 max-md:flex-col max-md:items-center ' >
        <div className=' w-1/3 max-md:w-2/3 shadow-lg '>
            <img  className='w-full p-2' src={image} alt="" />
        </div>
        <div className='w-2/3 flex flex-col gap-2 max-md:w-full max-md:items-center max-md:gap-5 max-md:text-center'>
            <div className=' text-fontlightgrey'>
                <h5 className=' inline-flex text-xl font-bold max-md:text-center max-md:text-lg'>{title}</h5>
               <span className=' font-normal text-lg max-md:text-sm'>{desc}</span>
                    
               
            </div>
            <div  className=' flex flex-col gap-2 max-md:text-center'>
                <h5 className=' text-fontgrey  text-xl font-bold  max-md:text-lg'>Main Highlights</h5>
            { highlight.length>200 ?   <p className='text-fontlightgrey' onClick={()=>setToggle(!toggle)} dangerouslySetInnerHTML={{__html:toggle?shortHighlight:longHighlight}} />
                : <p className='text-fontgrey'>{highlight}</p>
            }
            </div>
        </div>
        <div  className='w-1/3 max-md:w-full  flex flex-col items-center justify-between '>
           <div className='flex flex-col items-center gap-2 max-md:gap-3'>
            <p className=' text-3xl text-darkblue max-md:text-4xl'>{rating}</p>
            <p className=' text-sm font-normal max-md:text-xl'>{review}</p>
            <p>{stars}</p>
            </div>
            <div  className='w-full max-md:mb-5'>
                <Buttons className="bg-blue text-white w-full  py-1 rounded-md" name="View" />
            </div>
        </div>
    </div>
    )
};
