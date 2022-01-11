import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
img{
    height: auto;
    max-width: 100%;
}

.grid{
    display: grid;
}


.book__title{
    text-align: center;
    margin-bottom: 2rem;
}

.book__img{
    height: 300px;
    width: 280px;
    justify-self: center;
}

.book__form{
    padding: 1rem;
}

.input__box{
    margin-bottom: 1rem;
}

.input__box label{
    display: inline-block;
    width: 100px;
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.input__box input{
    padding: 0.75rem 0.25rem;
    width: 100%;
    outline: none;
}

.input__box input::placeholder{
    font-size: 0.8rem;
    font-weight: 500;
}

.input__action{
    text-align: center;
}

.action{
    padding: 1rem 1.95rem;
    font-weight: 600;
    background-color: #CF2161;
    color: #fff;
}

@media screen and (min-width: 500px){
    .input__box input{
        width: 80%;
    }
}

@media screen and (min-width: 700px){
    .book__container{
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
        margin:0 1rem;
    }

    .book__img{
        width: 100%;
        height: 100%;
    }
    
    .input__box input{
        width: 100%;
    }
}

@media screen and (min-width: 1024px)
{
    .input__box{
        margin: 1rem 0 3rem;
    }

    .input__box input{
        width: 80%;
    }

    .book__img{
        width: 500px;
        height: 500px;
    }
}
`;

const Booking = () => {
    return (
        <Container>
            <div className='book'>
                <h2 className='book__title'>Book Now</h2>
                <div className='book__container grid'>
                    <div className='book__img'>
                        <img src='/assets/images/Booking/book-img.svg'/> 
                    </div>

                    <div className='book__form'>
                        <div className='input__box'>
                            <label>Where To</label>
                            <input type='text' placeholder='place name'/>
                        </div>

                        <div className='input__box'>
                            <label>How many</label>
                            <input type='number' placeholder='persons number'/>
                        </div>

                        <div className='input__box'>
                            <label>Arrivals</label>
                            <input type='date'/>
                        </div>

                        <div className='input__box'>
                            <label>Leaving</label>
                            <input type='date'/>
                        </div>

                        <div className='input__action'>
                            <button type='submit' className='action'>Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Booking
