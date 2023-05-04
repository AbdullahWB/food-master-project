import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-2 gap-8 w-[80%] mx-auto my-[130px]'>
            <div>
                <h1 className='text-6xl text-primary font-semibold'>About Our Restaurant</h1>
                <p className='text-gray-600 text-xl mt-5'>At Food Master, we're passionate about bringing the best of Italian cuisine to our customers. Our team of talented chefs are some of the most experienced in the industry, with decades of experience crafting delicious, authentic dishes.</p>
                <p className='text-gray-600 text-xl mt-5'>We believe that food is more than just sustenance; it's an art form that brings people together. That's why we're committed to using only the freshest, highest-quality ingredients in all of our dishes. From homemade pasta to farm-fresh produce, we strive to bring the best of Italy to your plate.</p>
                <p className='text-gray-600 text-xl mt-5'>But our commitment to quality doesn't stop with our ingredients. We also believe in providing our customers with exceptional service and a welcoming atmosphere. Whether you're stopping in for a quick lunch or celebrating a special occasion, our team is dedicated to making your experience unforgettable.</p>
                <p className='text-gray-600 text-xl mt-5'>At Food Master, we're not just a restaurant; we're a community. We're proud to serve our customers and to be a part of their lives, creating memories that will last a lifetime. Come join us and experience the best of Italian cuisine in a warm, welcoming environment.</p>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-[80%] h-auto border-2 border-primary rounded-lg' src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/dish-detail/01.png" alt="" />
            </div>
        </div>
    );
};

export default About;