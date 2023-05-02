import React from 'react';
import { Link } from 'react-router-dom';

const Invitation = () => {
    return (
        <div className='grid md:grid-cols-2 md:gap-8 mt-[130px]'>
            <div>
                <img className='rounded-lg' src="https://imageio.forbes.com/specials-images/imageserve/62fe3a28c22bf8624fce7c7a/restaurant-interior-with-green-banquets/960x0.jpg?format=jpg&width=960" alt="" />
            </div>
            <div className='text-right'>
                <h1 className='text-5xl font-light text-gray-700'>We Invite You To The <span className='text-6xl text-primary font-bold'>Food Master</span> Restaurant.</h1>
                <p className='text-gray-600 mt-6 md:pl-48 mb-5'>Looking for a dining experience like no other? Look no further than our restaurant! Our culinary experts have crafted a menu that will delight your senses and satisfy your cravings. From classic Italian dishes to modern twists on traditional favorites, we've got something for everyone. So why not come and join us for a truly unforgettable dining experience? We can't wait to welcome you!</p>
                <p className='text-2xl mb-5 text-black font-semibold'>Monday- Friday: <span className='text-primary'>08am to 12pm</span></p>
                <p className='text-2xl mb-10 text-black font-semibold'>Saturday - Sunday: <span className='text-primary'>10am to 08pm</span></p>
                <Link><button className='btn btn-primary'>Book Now</button></Link>
            </div>
        </div>
    );
};

export default Invitation;