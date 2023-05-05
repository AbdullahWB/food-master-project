import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Booking = () => {
    const [click, setClick] = useState()
    const handleFavoriteClick = (id) => {
        setClick(true);
        toast.success("Your Table has been Booked! ❤️");
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%] mx-auto my-[130px]'>
            <div>
                <h1 className='text-gray-800 md:text-4xl text-2xl mb-5'>Book Your Table at the Best Restaurants in <span className='md:text-5xl text-3xl text-primary font-bold'>Food Master</span></h1>
                <p className='text-gray-600 md:pr-20 mb-10'>Don't miss out on a chance to dine at some of the most sought-after restaurants in town. With our easy-to-use online booking system, reserving a table has never been simpler. From intimate dining experiences to family-friendly restaurants, browse through our selection of top-rated establishments and book a table in just a few clicks. Whether you're celebrating a special occasion or simply looking for a night out with friends, make your reservation today and indulge in a truly unforgettable culinary experience.</p>
                <div className="card w-full md:w-[80%] bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="relative z-0 w-full mb-6 group bg-gray-100 p-[10px] rounded-lg">
                            <input type="text" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group bg-gray-100 p-[10px] rounded-lg">
                            <input type="text" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Phone Number</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group  bg-gray-100 p-[10px] rounded-lg">
                                <input type="date" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">From Date</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group  bg-gray-100 p-[10px] rounded-lg">
                                <input type="date" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">To Day</label>
                            </div>
                        </div>
                        <Link> <button className="btn btn-primary text-white" onClick={handleFavoriteClick} disabled={click}>
                            {click ? 'Book Now' : 'Booked'}
                        </button></Link>
                    </div>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31622.24535558564!2d12.484177021976718!3d41.87557138076864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6213fdd5647b%3A0x11a76b99d6df63fb!2sOsteria%20Bonelli!5e0!3m2!1sen!2sbd!4v1683287847783!5m2!1sen!2sbd" className='border-2 border-primary rounded-lg md:w-[600px] md:h-[700px] w-full h-auto' loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Booking;