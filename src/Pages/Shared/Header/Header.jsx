import React from 'react';
import { Link } from 'react-router-dom';
import chef from '../../../assets/126364-cooking.json'
import Lottie from 'lottie-react'

const Header = () => {
    return (
        <div className='bg-orange-50'>
            <div className='grid grid-cols-2 w-[80%] mx-auto pt-[80px] pb-[80px]'>
                <div>
                    <div className='relative lg:w-1/2 '>
                        <div className='w-full lg:w-full lg:ml-auto h-56  sm:h-96'>
                            <Lottie animationData={chef} loop={true} />
                        </div>
                    </div>
                </div>
                <div className='text-right'>
                    <h1 className='text-5xl capitalize'>Hear We have World favorite and Famous All <span className='text-primary font-bold text-6xl uppercase'>Italian Food</span> Collection</h1>
                    <p className='text-gray-500 mt-5 lg:pl-48'>Italian food is characterized by its simplicity and emphasis on fresh, high-quality ingredients. It is a cuisine that celebrates seasonal produce, with dishes often featuring tomatoes, olive oil, garlic, basil, and cheese. Pasta and pizza are two of the most well-known Italian dishes, but the cuisine also includes a variety of meats, seafood, vegetables, and soups. Italian food is often enjoyed in a social setting, with family and friends gathered around the table to share a meal and good conversation.</p>
                    <Link><button className='btn btn-primary text-white mt-5'>Get Explore</button></Link>
                    <p className='uppercase text-2xl text-primary mt-5'>you need! scroll down</p>
                </div>
            </div>
        </div>
    );
};

export default Header;