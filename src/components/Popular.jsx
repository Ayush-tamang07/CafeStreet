import React from 'react'
import PopularCard from './Card/PopularCard'

function Popular() {
  return (
    <div className='flex flex-col'>
        <h1 className=''>Popular</h1>
        <div className='flex justify-center gap-11'>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
        </div>
    </div>
  )
}

export default Popular