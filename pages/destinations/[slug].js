import React from 'react'


const DESTINATIONS = [
    {
      id: "d1",
      image: "/assets/images/Destinations/popular-destinations/p-1.jpg",
      title: "Mumbai",
      price: "$90.00",
    },
  
    {
      id: "d2",
      image: "/assets/images/Destinations/popular-destinations/p-2.jpg",
      title: "Sydney",
      price: "$120.00",
    },
  
    {
      id: "d3",
      image: "/assets/images/Destinations/popular-destinations/p-3.jpg",
      title: "Hawaii",
      price: "$150.00",
    },
  
    {
      id: "d4",
      image: "/assets/images/Destinations/popular-destinations/p-4.jpg",
      title: "Paris",
      price: "$150.00",
    },
  
    {
      id: "d5",
      image: "/assets/images/Destinations/popular-destinations/p-5.jpg",
      title: "Tokyo",
      price: "$150.00",
    },
  
    {
      id: "d6",
      image: "/assets/images/Destinations/popular-destinations/p-6.jpg",
      title: "Egypt",
      price: "$180.00",
    },
  ];

const DestinationDetail = () => {
    return (
        <div>
        </div>
    )
}

export async function getStaticProps(context){
    const { param } = context;
    const destinationID = param.slug;
    return {
        props: {
            destination: DESTINATIONS
        }
    };
}

export async function getStaticPaths(){
    return {
        paths: [
            {
                params: {

                }
            }
        ]
    };
}

export default DestinationDetail
