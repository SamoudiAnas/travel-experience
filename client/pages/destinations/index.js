import React from 'react'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'
import PopularDestinations from '../../components/Destination/popular-destinations/popular-destinations';
import TopDestinations from '../../components/Destination/top-destinations/top-destinations';

const TOP_DESTINATIONS = [
    {id: 'd1',
    image: '/assets/images/Destinations/top-destinations/santorini.jpg',
    title: 'Santorini',
    location: 'island, Greece'},

    {id: 'd2',
    image: '/assets/images/Destinations/top-destinations/corfu.jpg',
    title: 'Corfu',
    location: 'Corfu Town, Greece'},

    {id: 'd3',
    image: '/assets/images/Destinations/top-destinations/acropolis.jpg',
    title: 'Acropolis',
    location: 'Athens, Greece'},
];

const DESTINATIONS = [
    {id: 'd1',
    image: '/assets/images/Destinations/popular-destinations/p-1.jpg',
    title: 'Mumbai',
    price: '$90.00'},

    {id: 'd2',
    image: '/assets/images/Destinations/popular-destinations/p-2.jpg',
    title: 'Sydney',
    price: '$120.00'},

    {id: 'd3',
    image: '/assets/images/Destinations/popular-destinations/p-3.jpg',
    title: 'Hawaii',
    price: '$150.00'},

    {id: 'd4',
    image: '/assets/images/Destinations/popular-destinations/p-4.jpg',
    title: 'Paris',
    price: '$150.00'},

    {id: 'd5',
    image: '/assets/images/Destinations/popular-destinations/p-5.jpg',
    title: 'Tokyo',
    price: '$150.00'},

    {id: 'd6',
    image: '/assets/images/Destinations/popular-destinations/p-6.jpg',
    title: 'Egypt',
    price: '$180.00'},
];

const Section = styled.section`

.section{
    padding: 5rem 0 2rem;
}

.section__container{
    max-width: 1024px;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
}

.grid{
    display: grid;
}

img{
    height: auto;
    max-width: 100%;
}

.section__title{
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.tag{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    column-gap: .25rem;
    font-weight: 600;
    margin-left: 0.5rem;
}

.tag__icon{
    font-size: 1.5rem;
    color: #CF2161;
}

.items__container{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    margin: .25rem .75rem 2rem;
}

.items__container .item__block{
    position: relative;
    background: rgba(0, 0, 0, 0.9);
    height: 250px;
    width: 500px; 
    border-radius: 1rem;
}

.items__container .item__block img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
    border-radius: 1rem;
}

.item__content{
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: #fff;
}

.item__content h3{
    font-size: 1.15rem;
}

.item__content p{
    display: inline-flex;
    align-items: center;
    column-gap: .15rem;
    font-size: 0.85rem;
}

.section__subtitle{
    text-align: center;
    margin-bottom: 2rem;
}

.box__container{
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    gap: 2rem 1rem;
    cursor: pointer;
}

.box{
    position: relative;
    height: 320px;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 1rem;
}

.box__img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
}

.content h3{
    display: flex;
    align-items: center;
    column-gap: 0.2rem;
}

.content .price{
    font-weight: 500;
    margin-bottom: 2rem;
}

.button{
    padding: 1rem 1.25rem;
    background-color: #CF2161;
    font-weight: 500;
    border-radius: .5rem;
    cursor: pointer;
}

.content{
    display: none;
}

.box:hover img{
    opacity: 0.4;
}

.box:hover .content{
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    color: white;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media screen and (min-width: 1024px){
    .section__container{
        margin-right: auto;
        margin-left: auto;
    }
}

`;

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

const Destinations = () => {
    return (
        <Section>
            <div className='destinations section'>
                <h2 className='section__title destination__section-title'>Destinations</h2>
                <div className='destinations__container section__container'>
                <h3 className='tag'><i class="ri-fire-line tag__icon"></i>Top Destinations</h3>
                    <div className='items__container grid'>
                        {TOP_DESTINATIONS.map((item) => (
                            <TopDestinations key={item.key} item={item} />
                        ))}
                    </div>

                    
                    <div className='box__section-container'>
                        <h3 className='section__subtitle'>Popular Destinations</h3>
                        <div className='box__container grid' >
                            {DESTINATIONS.map((item) => (
                                <PopularDestinations key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </Section>
    )
}

export default Destinations
