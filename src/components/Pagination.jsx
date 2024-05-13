import React from 'react'

function Pagination({handlePrev,handleNext,pageNo}) {
  return (
    <div className=' flex w-full bg-gray-700/20 justify-center mt-8'>
      <div className='px-8 hover:cursor-pointer' onClick={handlePrev}><i class="fa-solid fa-arrow-left"></i></div>
      <div className='font-bold'>{pageNo}</div>
      <div className='px-8 hover:cursor-pointer' onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
