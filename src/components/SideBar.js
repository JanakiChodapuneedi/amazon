import React from 'react'
import { useSelector } from 'react-redux';

const SideBar = () => {
    const isSideBarOpen = useSelector(store=> store.app.isSideBarOpen);
    if (!isSideBarOpen) return null;
  return (
    <div className='w-1/4 shadow-md'>
        
    <h1 className='font-bold text-lg pt-2'>Trending</h1>
    <ul>
        <li> Best Sellers</li>
        <li> New Releases</li>
        <li> Movers and Sellers </li>
    </ul>
    <h1 className='font-bold text-lg pt-2'>Digital Content and Devices</h1>
    <ul>
        <li> Echo & Alexa </li>
        <li> Fire TV </li>
        <li> Audio Books </li>
    </ul>
    </div>
  )
}

export default SideBar;