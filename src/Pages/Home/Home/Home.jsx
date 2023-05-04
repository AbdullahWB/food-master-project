import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Invitation from '../Invitation/Invitation';
import Team from '../Team/Team';
import HotFood from '../HotFood/HotFood';
import Header from '../../Shared/Header/Header';
import LazyLoad from 'react-lazy-load';


const Home = () => {
    const [masters, setMasters] = useState([])
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://food-lover-server-abdullahwb.vercel.app/chefs')
            .then((res) => res.json())
            .then((data) => setMasters(data))
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        fetch('https://food-lover-server-abdullahwb.vercel.app/foods')
            .then((res) => res.json())
            .then((data) => setFoods(data))
            .catch((error) => console.log(error))
    }, [])


    // console.log(foods);
    return (
        <div>
            <Header></Header>
            <div className='my-[130px]'>
                <div className='my-[130px]'>
                    <h1 className='text-6xl text-gray-800 text-center font-light mb-10'>Today Hot Foods is <span className='text-primary font-bold '>Food Master</span></h1>
                    <div className='w-[80%] mx-auto'>
                        <HotFood foods={foods}></HotFood>
                    </div>
                </div>
                <div>
                    <h1 className='text-6xl text-gray-800 text-center font-light mb-10'>Our ProudFull <span className='text-primary font-bold '>Chefs</span></h1>
                    <LazyLoad className='w-full h-auto' offset={300}>
                        <div className='w-[80%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-7'>
                            {
                                masters.map(master => <Cart
                                    key={master.id}
                                    master={master}
                                ></Cart>)
                            }
                        </div>
                    </LazyLoad>
                </div>
                <div className='w-[80%] mx-auto'>
                    <Team></Team>
                </div>
                <div className='w-[80%] mx-auto'>
                    <Invitation></Invitation>
                </div>
            </div>
        </div>
    );
};

export default Home;