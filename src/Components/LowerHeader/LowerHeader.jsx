import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import "./LowerHeader.css"

function LowerHeader() {
  return (
    <div className={["lower_container"]}>
        <ul>
            <li>
                <IoMenuSharp />
                <p>All</p>
            </li>
            <li> Today's Deals</li>
            <li> Computers Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader