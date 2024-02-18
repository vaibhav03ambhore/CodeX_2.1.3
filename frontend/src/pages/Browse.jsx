import React from 'react'
import BrowserBid from './BrowserBid'
import FilterCategories from '../Components/FilterCategories'

const Browse = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/4 p-4 border-r">
        <FilterCategories/>
      </div>
      <div className="w-3/4 p-4">
        <BrowserBid/>
      </div>
    </div>
  )
}

export default Browse