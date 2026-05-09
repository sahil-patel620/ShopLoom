import React from 'react'
import Navigation from './../components/Navigation/Navigation';
import { Outlet } from 'react-router';

const ShopAppWrapper = () => {
  return (
    <div>
        <Navigation/>
        <Outlet/>
    </div>
  )
}

export default ShopAppWrapper