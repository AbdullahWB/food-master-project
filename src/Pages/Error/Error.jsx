import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <div className='flex justify-center items-center'>
                <img className='w-[15%] h-auto' src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/error/01.png" alt="" />
                <img className='w-[15%] h-auto' src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/error/02.png" alt="" />
                <img className='w-[15%] h-auto' src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/error/01.png" alt="" />
            </div>
            <div className='max-w-md text-center'>
                <h2 className='mb-8 font-extrabold text-9xl text-primary'>
                    <span className='sr-only'>Error</span>
                    {status || 404}
                </h2>
                <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                    {error?.message}
                </p>
                <Link to='/' className='btn btn-primary text-white'>
                    Back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Error;