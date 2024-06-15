import React from 'react'
import Header from '../components/Header'
import AllTunes from '../components/AllTunes'

const page = () => {
  return (
    <div>
        <Header />
        <div className='mt-20 p-6'>
          <h1 className='p-4 text-2xl font-bold'>All Tunes board</h1>
          <AllTunes />
        </div>
    </div>
  )
}

export default page