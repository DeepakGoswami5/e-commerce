import React from 'react';
import './menu-items.scss'

const menuItem = ({title,imageUrl,size}) => {
    return(
        <div className={`${size} menu-item`}>
            <div className='background-image' style={{
            backgroundImage:`url(${imageUrl})`
        }} >

            </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='sub-title'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default menuItem;