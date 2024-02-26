import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

export default function TempDrawer() {
const [open,setOpen] = React.useState(false)


  return (
    <>
          <Button onClick={()=>setOpen(true)}><MenuIcon /></Button>
          <SwipeableDrawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
            onOpen={() => setOpen(true)} 
            >
          <div className='drawer-links'>
            <a to="/"><p>Categories</p></a>
            <a to="/compare"><p>Website Builders</p></a>
            <a to="/dashboard"><p>Todays Deal</p></a>
            </div>
          </SwipeableDrawer>
    </>
  );
}