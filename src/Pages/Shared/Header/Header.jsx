import React from 'react';
import { Link } from 'react-router-dom';
import chef from '../../../assets/126364-cooking.json'
import Lottie from 'lottie-react'

const Header = () => {
    return (
        <div className="hero -mt-[64px] min-h-screen object-center" style={{ backgroundImage: `url("https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/User-profile/01.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-[80%] text-center text-neutral-content">
                <>
                    <div className='grid md:grid-cols-2 md:gap-0 gap-28 grid-cols-1 mx-auto md:pt-[80px] pb-[80px]'>
                        <div>
                            <div className='relative lg:w-full '>
                                <div className='w-full lg:w-full lg:ml-auto h-56  sm:h-96'>
                                    <Lottie animationData={chef} loop={true} />
                                </div>
                            </div>
                        </div>
                        <div className='md:text-right text-center lg:mt-20'>
                            <h1 className='text-5xl capitalize text-white'>Hear We have World favorite and Famous All <span className='text-primary font-bold text-6xl uppercase'>Italian Food</span> Collection</h1>
                            <p className='text-gray-100 mt-5 lg:pl-48'>Italian food is characterized by its simplicity and emphasis on fresh, high-quality ingredients. It is a cuisine that celebrates seasonal produce, with dishes often featuring tomatoes, olive oil, garlic, basil, and cheese. Pasta and pizza are two of the most well-known Italian dishes, but the cuisine also includes a variety of meats, seafood, vegetables, and soups. Italian food is often enjoyed in a social setting, with family and friends gathered around the table to share a meal and good conversation.</p>
                            <Link><button className='btn btn-primary text-white mt-5'>Get Explore</button></Link>
                            <p className='uppercase text-2xl text-primary mt-5'>you need! scroll down</p>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Header;