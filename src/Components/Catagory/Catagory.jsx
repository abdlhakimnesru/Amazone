import React from 'react'
import { catagoryInfo } from "./fullinfo.js"
import CatagoryCard from './CatagoryCard.jsx'
import clasess from './Catagory.module.css'

function Catagory() {
  return (
    <section className={clasess["catagory_container"]}>
       
        {
            catagoryInfo.map((infos, id ) => (
                 <CatagoryCard data = {infos} key ={id}/>)
            )}
             
    </section>
  )
}

export default Catagory