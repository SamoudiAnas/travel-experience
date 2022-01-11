import React from 'react'

const PopularDestinations = ({item}) => {
    return (
        <div className='box'>
            <img className='box__img' src={item.image} alt={item.title}/>
            <div className='content'>
                <h3><i class="ri-map-pin-line box__icon"></i>{item.title}</h3>
                {/* <div className='stars' >
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-line"></i>
                </div>  */}
                <div className='price'>{item.price}</div>

                <a className='button actions'>Book Now</a>
                
            </div>
        </div>
    )
}

export default PopularDestinations
