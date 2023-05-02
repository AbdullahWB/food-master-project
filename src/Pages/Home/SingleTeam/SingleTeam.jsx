import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SingleTeem.css'

import { Autoplay, Pagination, Navigation } from 'swiper';

const SingleTeam = ({ teams }) => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {
                    teams.map(team => (
                        <SwiperSlide key={team.id}>
                            <div className='relative'>
                                <img className='w-full rounded-lg' src={team.photo_url} />
                                <div className="absolute inset-0 scale-[98.5%] bg-[#000] bg-opacity-50 rounded-lg flex flex-col px-10 justify-center items-center">
                                    <h1 className='text-5xl mb-2 font-bold text-white'>{team.name}</h1>
                                    <h3 className='text-3xl mb-5 font-semibold text-white'>{team.work_title}</h3>
                                    <p className='text-xl font-normal text-white'>{team.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default SingleTeam;