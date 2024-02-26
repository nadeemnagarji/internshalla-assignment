import React from 'react';
import Header from '../Header/Header';
import Container from '../container/Container';
import "./styles.css"
import Select from '../Select';
import Buttons from '../Buttons';
import Card from '../maincards/Card';
import SmallCard from '../maincards/SmallCard';
import Input from '../Input';
import Footer from '../Footer/Footer';

export default function Homepage(params) {
    const handleOnclickFn = ()=>{

    }
    const options=["Top relevant","latest"]
    const buttonList = [
                    {
                        name:"Tools",
                        onclick:handleOnclickFn,
                    },
                    {
                        name:"Aws Builder",
                        onclick:handleOnclickFn,
                    },  {
                        name:"Start Build",
                        onclick:handleOnclickFn,
                    },  {
                        name:"Build Supplies",
                        onclick:handleOnclickFn,
                    },
                    {
                        name:"Tooling",
                        onclick:handleOnclickFn,
                    },
                    {
                        name:"BlueHosting",
                        onclick:handleOnclickFn,
                    }

]
const cardData =[{
    title:"WixPro 72-Inch Responsive Website Builder- ",
    desc:" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlight:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating:9.8,
    review:"Exceptional",
    imageSrc:"./assets/download.png",
    stars:5,
    tag:"Best Choice",
},
{
    title:"SiteCraft 68-Inch Ultimate Web Design Studio- ",
    desc:" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White) Receive the WixPro websitegi",
    highlight:"[What You Get]: Receive the WixPro Receive the WixPro website builder  Receive the WixPro website builder Receive the WixPro website builder website builder suite, ",
    rating:9.5,
    review:"Excellent",
    imageSrc:"./assets/download.png",
    stars:4.5,
    tag:"Best Value",
},
{
    title:"CDK Resposive Builder- ",
    desc:" An extensive library of widgets and apps, and detailed step-by-step guides",
    highlight:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating:9.1,
    review:"Very Good",
    imageSrc:"./assets/download.png",
    stars:4.5,
},
{
    title:"CDK Resposive Builder- ",
    desc:" An extensive library of widgets and apps, and detailed step-by-step guides",
    highlight:"[What You Get]: Receive the WixPro website builder access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides  of widgets and apps, and detailed step-by-step guides. suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating:9.5,
    review:"Exceptional",
    imageSrc:"./assets/download.png",
    stars:4.5,
}
]


const SmallCardData =[
    {
    title:"Webbuilder 1",
    desc:"Computer  Modern clasic with wix support",
    price1:39.36,
    price2:49.86,
    discountOffer:"20 %",
    imageSrc:"./assets/download.png",
    },
    {
        title:"Webbuilder 1",
        desc:"Computer  Modern clasic with wix support",
        price1:39.36,
        price2:49.86,
        discountOffer:"20 %",
        imageSrc:"./assets/download.png",
        },
    {
            title:"Webbuilder 1",
            desc:"Computer  Modern clasic with wix support",
            price1:39.36,
            price2:49.86,
            discountOffer:"20 %",
            imageSrc:"./assets/download.png",
    },


]
SmallCardData.map(card=> console.log(card))

    return(
        <Container>
            <Header />
            <div className='main w-3/4 m-auto pt-10  max-md:flex  max-md:flex-col max-md:items-center'>
                <h1 className=' pt-8 heading text-fontgrey font-normal md:text-5xl max-[700px]:text-center text-4xl'>Best Website builders in the US</h1>
                <div className='mt-2 last-update flex items-center justify-between text-sm text-fontlightgrey p-3 max-[700px]:flex-col'>
                    <div className='md:flex items-center text-sm gap-5 flex max-[700px]:flex-col'>
                    <p>last updated - February 22,2020</p>
                    <p>Advertising Disclosure</p>
                    </div>
                    <Select options={options} />
                </div>
                <div className='mt-2 w-4/5 md:flex items-center justify-between text-sm text-fontlightgrey p-3 flex max-[700px]:flex-col max-[700px]:gap-4'>
                    {buttonList.map((button,i)=>
                        <Buttons key={i} name={button.name} />)}
                </div>
                <div className='flex w-full flex-col gap-10 mt-10 '>
                    { cardData && cardData.length && 
                    cardData.map((card,i)=>
                        <Card
                            key={i} 
                            desc={card.desc}
                            title={card.title}
                            rating={card.rating}
                            stars={card.stars}
                            review={card.review}
                            highlight={card.highlight}
                            imgSrc={card.imageSrc}
                            tag={card.tag}  />
                    )}
                </div>
                <div className='w-full flex flex-col mt-10 items-start gap-5 max-md:items-center'>
                    <h5 className=' text-3xl text-fontgrey max-md:text-2xl max-md:text-center max-md:mb-5' >Related deals you might like for</h5> 
                    <div className='flex gap-5 items-center max-lg:flex-wrap max-lg:justify-center  max-md:flex-col  max-md:gap-10'>
                            {SmallCardData && SmallCardData.length &&
                            SmallCardData.map((card,i)=>
                            <SmallCard
                            key={i}
                            desc={card.desc}
                            discountOffer={card.discountOffer}
                            imgSrc={card.imageSrc}
                            title={card.title}
                            price1={card.price1}
                            price2={card.price2}
                            />
                            )
                            }
                    </div>  
                </div>
                <div className='flex justify-between items-center  max-md:flex-col max-md:items-center max-md:gap-5 max-md:mt-8'>
                    <h5 className=' w-1/2 mt-8 font-normal text-fontdarkgrey text-3xl max-md:text-2xl max-md:w-full max-md:mb-4'>Sign up and get 
                        exclusive special deals</h5>
                    <div className='flex  items-center h-full w-1/3 max-md:w-full'>
                    <Input className=' w-4/5' />
                    <Buttons name="Sign up" 
                    className= "signup-btn w-24 viewbtn  bg-blue mt-1 hover:bg-darkblue text-white w-full   py-1 " 
                    />
                    </div>
                </div>
            
            </div>
            <div className='mt-20 bg-darkgrey '>
                    <Footer />
                </div>
        </Container>
    )
};  
