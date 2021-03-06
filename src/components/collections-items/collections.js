import React from 'react';
import './collections-items.scss';

const CollectionItems = ({id,name,price,imageUrl}) => (
    <div className='collection-item'>
        <div 
            className='item-image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        
    </div>
)

export default CollectionItems;