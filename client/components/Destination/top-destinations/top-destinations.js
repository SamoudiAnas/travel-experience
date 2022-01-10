import React from 'react'


const TopDestinations = ({item}) => {
    return (
            <div className='item__block'>
                <img src={item.image} alt={item.title}/>

                <div className='item__content'>  
                    <h3>{item.title}</h3>
                    <p><i class="ri-map-pin-line item__icon"></i> {item.location}</p>
                </div>
            </div>
    )
}

export default TopDestinations
