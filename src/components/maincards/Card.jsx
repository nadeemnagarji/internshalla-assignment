import React, { useState } from 'react';
import Buttons from '../Buttons';
import image from "../../assets/download.png"

export default function Card({desc,rating,stars,review,title,highlight,tag,imgSrc}) {
    const shortHighlight =` ${highlight.slice(0,200)}<span class="read-more"> ReadMore</span>`
    const longHighlight = `${highlight} <span class="read-more"> Read Less</span>  `

    const [toggle,setToggle] = useState(false)
    return(
        <div className='flex w-full gap-10' >
        <div className=' w-1/3'>
            <img  className='w-full p-2' src={image} alt="" />
        </div>
        <div className='w-2/3 flex flex-col gap-2 '>
            <div className=' text-fontlightgrey'>
                <h5 className=' inline-flex text-xl font-bold'>{title}</h5>
               <span className=' font-normal text-lg'>{desc}</span>
                    
               
            </div>
            <div  className=' flex flex-col gap-2'>
                <h5 className=' text-fontgrey inline-flex text-xl font-bold'>Main Highlights</h5>
            { highlight.length>200 ?   <p onClick={()=>setToggle(!toggle)} dangerouslySetInnerHTML={{__html:toggle?shortHighlight:longHighlight}} />
                : <p dangerouslySetInnerHTML={{__html:highlight}} />
            }
            </div>
        </div>
        <div  className='w-1/3  flex flex-col items-center justify-between '>
           <div className='flex flex-col items-center gap-2'>
            <p className=' text-3xl text-darkblue'>{rating}</p>
            <p className=' text-sm font-normal'>{review}</p>
            <p>{stars}</p>
            </div>
            <div  className='w-full'>
                <Buttons className="bg-blue text-white w-full  py-1 rounded-md" name="View" />
            </div>
        </div>
    </div>
    )
};
