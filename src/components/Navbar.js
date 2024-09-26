import React from 'react';
import '../App.css';


function Navbar(){
    return(
        <>
        <nav className='navbar'>
          <div className='logo'>
         <img src='https://www.techmahindra.com/themes/custom/techm/techm_logo.svg' alt="Tech Mahindra Clone" />
          </div>

          <ul className='nav-links'>
           
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#capabilites">CAPABILITIES</a></li>
            <li><a href="#industries">INDUSTRIES</a></li>
            <li><a href="#insights">INSIGHTS</a></li>
            <li><a href="#careers">CAREERS</a></li>
            <li><a href="#contact">CONTACT US</a></li>

          </ul>

          <div className='search-container'>
                    <img src='https://img.icons8.com/material-outlined/24/000000/search--v1.png' alt='Search' className='search-icon' />
                </div>

        </nav>
        
        </>
    );
}

export default Navbar;