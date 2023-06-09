import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./HotFood.css"
import { Link } from 'react-router-dom';
import { FaRegStar, FaStar ,FaArrowRight} from "react-icons/fa";
import Rating from 'react-rating';

const HotFood = ({ foods }) => {
    const [focusedCategory, setFocusedCategory] = useState({});

    useEffect(() => {
        setFocusedCategory(foods[0])
    }, [foods])

    const handleSlideChange = (swiper) => {
        const { activeIndex } = swiper;
        setFocusedCategory(foods[activeIndex]);
    };
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-7'>
            <div className='order-2 md:order-1'>
                <h1 className='lg:text-6xl md:text-4xl text-2xl text-primary md:mt-20 font-semibold uppercase'>{focusedCategory?.name}</h1>
                <p className='pr-[50%] mt-5 text-gray-800'>{focusedCategory?.description}</p>
                <div className='flex mt-6 mb-5'>
                    <p className='text-xl'>Price: {focusedCategory?.price}$</p>
                    <div className='flex'>
                        <span className='text-xl ml-10 mr-2'>{focusedCategory?.rating}</span>
                        <Rating
                            className='mt-1'
                            placeholderRating={focusedCategory.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-primary'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                </div>
                <Link><button className='btn btn-primary px-10 py-3 text-white mt-5'>Order Now <FaArrowRight className='ml-3'></FaArrowRight></button></Link>
            </div>
            <div className='order-1 md:order-2 mb-5 md:mb-0'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                    onSlideChange={handleSlideChange}
                >
                    {foods.map(food => (
                        <SwiperSlide key={food.id}>
                            <div className='relative'>
                                <img className='w-full h-full' src={food.img} />
                                <div className="absolute inset-0 scale-[98.5%] bg-[#000] bg-opacity-50 rounded-[10px] flex justify-center items-center">
                                    <h1 className='md:text-5xl text-xl font-bold text-white'>{food.name}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HotFood;