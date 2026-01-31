import React from 'react'
import clasess from './Catagory.module.css'

function CatagoryCard({data}) {
  return (
    <div className={clasess["catagory"]}>
        <a href="">
            <span>
              <h2>{data.title}</h2>
            </span>
            <img src={data.image} alt="" />
            <p>shop now</p>
        </a>
    </div>
  )
}

export default CatagoryCard