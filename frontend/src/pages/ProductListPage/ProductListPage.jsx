import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";


const ProductListPage = () => {
  return (
    <div>
        <Navigation/>
        <div className='flex '>
            <div className='w-[20%] p-5 border rounded-lg  m-5'>
                {/* filters */}
                <div className='flex justify-between items-center'>
                    <p className='text-lg text-gray-600'>Filters</p>
                    <HiAdjustmentsHorizontal className='text-2xl text-gray-600'/>
                </div>
            </div>
            
            <div>
                {/* product list */}
                <p>Hello2 </p>
            </div>
        </div>
    </div>
  )
}

export default ProductListPage