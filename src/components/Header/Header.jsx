import React from 'react';
import Container from '../container/Container';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import searchIcon from "../../assets/search.png"

import "./styles.css"
import TempDrawer from './Drawer';
FontAwesomeIcon
export default function Header() {
   
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Categories',
            path: "/"
        }, 
        {
            name: "Website Builders",
            path: "/",
        },
        {
            name: "Todays Deal",
            path: "/",
        },
        ]

    return(
        <header>
            <Container>
            <nav className='hidden md:flex bg bg-darkgrey navbar
             w-full items-center justify-center gap-12 h-14 fixed '>
          <div className=' rounded-md flex items-center justify-center gap-2  bg-white'>
            <img className=' w-5 ml-2' src={searchIcon}/>
            <Input  />
          </div>
          <ul className='flex  '>
            {navItems.map((item) => 
        
              <li key={item.name}>
                <button
                onClick={() => navigate(item.path)}
                className='inline-bock px-6 py-2 text-fontwhite duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
       
            )}
          </ul>
        </nav>
        <div className='  flex items-center justify-between  '> 
        <div className=' rounded-md flex items-center  justify-center gap-2  '>
            <img className=' w-5 ml-5' src={searchIcon} />
            <Input />
          </div>
            <TempDrawer/>
        </div>
            </Container>
        </header>
    )
};