import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const Details = () => {
    const category = useLoaderData()
    console.log(category);
    return (
        <div className='bg-orange-50'>
             <div className='grid grid-cols-2 w-[80%] mx-auto pt-[80px] pb-[80px]'>
            <div className='flex justify-center items-center'>
                <img className='w-[400px] h-[450px] object-cover rounded-lg border-primary border-2' src={category.photoUrl} alt="" />
            </div>
            <div className='text-right'>
                <h1 className='text-7xl text-primary font-bold'>{category.name}</h1>
                <p className='text-xl mt-10 text-gray-600 pl-48'>{category.description}</p>
                <p className='mt-5 text-xl text-gray-600'>Year Of Experience: <span className='text-bold text-primary'>{category.yearsOfExperience}</span> Year</p>
                <span className='text-xl flex justify-end mt-5 text-gray-600'>Like Count: <span className='flex'><FaHeart className='mt-[7px] mx-1 text-primary'></FaHeart> {category.likesCount}</span></span>
            </div>
        </div>
       </div>
    );
};

export default Details;