import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-8 w-[80%] mx-auto my-[130px]'>
            <div className='flex justify-center items-center'>
                <img className='w-[80%] h-[100%] rounded-lg border-primary border-2' src={details.img} alt="" />
            </div>
            <div>
                <h1 className='md:text-4xl text-2xl text-primary'>{details.name}</h1>
                <p className='text-gray-800 md:text-xl mt-10'>{details.ingredients}</p>
                <p className='text-gray-600 mt-5'>{details.instructions}</p>
                <p className='text-gray-600 mt-5'>Price: {details.price}$</p>
                <div className='flex justify-start mt-5'>
                    <span className='text-xl mr-2 '>{details.rating}</span>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;