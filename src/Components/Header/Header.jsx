// Amazone/src/Components/Header/Header.jsx

import React from "react";
import  classes from "./Header.module.css";
import amazLogo from "../../../public/Images/amazon-logo.png";
import usaFlag from "../../../public/Images/usa-flag.png";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import LowerHeader from "../LowerHeader/LowerHeader";

function Header() {
  return (
    <>
    <header className={classes["Header_Container"]}>
        {/* logo section */}

      <div className={classes["logo_container"]}>  

           <a href="">
             <img src={amazLogo} alt="Amazon Logo" />
           </a>
            

            <div className={classes["deliverdTo"]}>
                <MdOutlineLocationOn />
                <div>
                  <p> Deliverd </p>
                <span> Ethiopia</span>
                </div>
            </div>
      </div>

      <div className={classes["search"]}>

             {/* search bar section */}

        <select name="" id="">
           <option value="">All</option>
           <option value="">Electronics</option>
           <option value="">Books</option>
            <option value="">Science Fiction</option>
            <option value="">Mystery</option>
            <option value="">Computers</option>
            <option value="">Science Fiction</option>
            <option value="">Mystery</option>
        </select>

        <input type="text"  placeholder="Search Amazone"/>
        <FaSearch  size={25}/>
      </div>

      <div >
            <div className={classes["order_container"]}>
                
                  <a href="" className={classes["language"]}> <img src={usaFlag} alt="" />

                  <select name="" id="">
                    <option value="">EN</option>
                    <option value="">FR</option>
                    <option value="">DE</option>
                    <option value="">IT</option>
                    <option value="">ES</option>
                </select>  
              </a>
     
                <a href="">
                    <div> Hello <span>sign In</span></div>
                     
                    <h4> Account and Lists</h4>          
                </a>

                <a href="">
                    <p> Returns</p>
                    <span> & Orders</span>          
                </a>

                <a href="" className={classes["cart"]}>
                    
                    <LuShoppingCart />
                    <span>0</span>
                    <p> Cart</p>
                    
                </a>
              </div>
            
      </div>
    </header>
    <LowerHeader />
  </>
  
  );
}

export default Header;
