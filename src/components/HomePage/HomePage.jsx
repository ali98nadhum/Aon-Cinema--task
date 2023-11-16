import CardItem from "../Card/CardItem"
import Paginationw from "../Pagination/Pagination"
import Slider from "../Slider/Slider"
import React, { useEffect } from 'react';



const HomePage = ({getPage, pageCount}) => {

  
  
  return (
    <div>
        <Slider/>
       <CardItem/>
        <Paginationw getPage={getPage} pageCount={pageCount} />
    </div>
  )
}

export default HomePage