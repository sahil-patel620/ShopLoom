import React from 'react'
import SectionHeading from '../SectionsHeading/SectionHeading'
import Card from '../../Card/Card'

const Category = ({title, data}) => {
  return (
    <>
    <SectionHeading title={title} />
    <div className='flex flex-wrap px-8'>
    {data && data?.map((item,index) => {
        return (
            <Card key={index} imagePath={item?.imagePath} title={item?.title}  description={item?.description} actionArrow={true} height={'280px'} />
        )
    })}
    </div>
    </>
  )
}

export default Category