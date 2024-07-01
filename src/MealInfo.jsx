import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MealContext } from './App';

const MealInfo = ({value}) => {
    const {meal}=useContext(MealContext)
    return (
        <div>
            <h1 className='title text-center mt-4 mb-6 '>meal info</h1>
            
                    <Card  className='my-4 shadow-lg w-50 margin-auto  mx-auto '>
                        <Card.Img variant="top" src={meal.image} alt='meal images' className='w-full h-40 object-cover object-fit-fill' />
                        <Card.Body className='bg-gray-500 rounded-5 rounded-top-0'>
                            <Card.Title className='text-lg font-bold fs-1 text-center m-2'>{meal.title}</Card.Title>
                            <Card.Text className='text-gray-200 text-center fw-bolde text-center fs-3'>
                                {meal.description}
                            </Card.Text>
                            {/* <Button variant="primary">More info</Button> */}
                        </Card.Body>
                    </Card>
        </div>
    )
}

export default MealInfo
