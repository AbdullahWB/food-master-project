import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import FoodItems from '../FoodItems/FoodItems';

const Details = () => {
    const category = useLoaderData()
    const [items, setItems] = useState()

    useEffect(() => {
        fetch(`https://food-lover-server-abdullahwb.vercel.app/categories/${category.id}`)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    }, [])
    console.log(items);
    return (
        <div>
            <div className='bg-orange-50'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-7 w-[80%] mx-auto pt-[80px] pb-[80px]'>
                    <div className='flex justify-center items-center'>
                        <img className='w-[400px] h-[450px] object-cover rounded-lg border-primary border-2' src={category.photoUrl} alt="" />
                    </div>
                    <div className='md:text-right text-center'>
                        <h1 className='md:text-7xl text-4xl text-primary font-bold'>{category.name}</h1>
                        <p className='text-xl mt-10 text-gray-600 md:pl-48'>{category.description}</p>
                        <p className='mt-5 text-xl text-gray-600'>Year Of Experience: <span className='text-bold text-primary'>{category.yearsOfExperience}</span> Year</p>
                        <span className='text-xl flex justify-center md:justify-end mt-5 text-gray-600'>Like Count: <span className='flex'><FaHeart className='mt-[7px] mx-1 text-primary'></FaHeart> {category.likesCount}</span></span>
                    </div>
                </div>
            </div>
            <div className='w-[80%] py-[130px] mx-auto grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-7'>
                {
                    items?.map(item => <FoodItems
                        key={item.id}
                        item={item}
                    ></FoodItems>)
                }
            </div>
        </div>
    );
};

export default Details;