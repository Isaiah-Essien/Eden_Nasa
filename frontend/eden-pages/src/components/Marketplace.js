import React from 'react'
import '../components/Marketplace.css'
import search_icon from "../assets/search.png"
import blg from "../assets/blog.jpg"
import Navibar from "./Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Marketplace = () => {
  return (
    <div className='containner'>
      <div className='top-bar'>
        <input type='text' className='city-input' placeholder= 'Search...'/>
        <div className='search_icon'>
        <FontAwesomeIcon className='search' icon={faMagnifyingGlass} />
        </div>
        <FontAwesomeIcon  className='cart' icon={faCartShopping} />
    </div>
    <div className='filters'>
    <a>Sort by: Best Selling <FontAwesomeIcon style={{ paddingLeft: '10px' }} icon={faChevronDown} /></a>
    <a>Price range <FontAwesomeIcon style={{ paddingLeft: '10px' }} icon={faChevronDown} /></a>
    <a>filters <FontAwesomeIcon style={{ paddingLeft: '10px' }} icon={faChevronDown} /></a>
    </div>
    <div className='marketplace'>
    <div className='cats'>
    <h1>Categories</h1>
      <div>
        <a href='#'>All categories <FontAwesomeIcon className='categs' style={{ paddingLeft: '7px' }} icon={faChevronRight} /></a>
        <a href='#'>Fruits <FontAwesomeIcon className='categs' style={{ paddingLeft: '7px' }}icon={faChevronRight} /></a>
        <a href='#'>Vegetables <FontAwesomeIcon className='categs' style={{ paddingLeft: '7px' }} icon={faChevronRight} /></a>
        <a href='#'>Meat <FontAwesomeIcon className='categs' style={{ paddingLeft: '7px' }} icon={faChevronRight} /></a>
        <a href='#'>Dairy Products <FontAwesomeIcon className='categs' style={{ paddingLeft: '7px' }} icon={faChevronRight} /></a>
      </div>
    </div>
    <div className='market'>
    <div className='item'>
      <div className='itemimg-cont'>
        <img src={blg}/>
        </div>
        <div className='item-text'>
        <div>
        <h1 className='item-name'>Fresh Lettuce</h1>
        <h5 className='farmer-name'>Ikaze farm</h5>
        <p className='price'>1200RWF/KG</p>
        </div>
        <div className='but'>
        <a className='addcart'>Add to cart</a>
        </div>
        </div>  
      </div>
      
      <div className='item'>
      <div className='itemimg-cont'>
        <img src={blg}/>
        </div>
        <div className='item-text'>
        <div>
        <h1 className='item-name'>Fresh Lettuce</h1>
        <h5 className='farmer-name'>Ikaze farm</h5>
        <p className='price'>1200RWF/KG</p>
        </div>
        <div className='but'>
        <a className='addcart'>Add to cart</a>
        </div>
        </div>
      </div>
      <div className='item'>
      <div className='itemimg-cont'>
        <img src={blg}/>
        </div>
        <div className='item-text'>
        <div>
        <h1 className='item-name'>Fresh Lettuce</h1>
        <h5 className='farmer-name'>Ikaze farm</h5>
        <p className='price'>1200RWF/KG</p>
        </div>
        <div className='but'>
        <a className='addcart'>Add to cart</a>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Marketplace;
