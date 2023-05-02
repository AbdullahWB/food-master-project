import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#0e1111]'>
            <div className='w-[80%] mx-auto p-[130px] text-gray-100'>
            <div className='grid grid-cols-2 gap-7 mb-10'>
                <div className="text-and-sh pb-10 lg:pb-0 md:pb-0 pt-10 lg:pt-0 h-full">
                    <h1 className='text-2xl font-bold mb-5 text-primary'>Subscribe and joint our community</h1>
                    <p className='text-xl mb-5'>There are many variations of passages of available, but the majority have suffered</p>
                    <form>
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Email address" className="input input-bordered border-blue-50 bg-transparent md:h-[64px] md:w-[330px] lg:h-[64px] lg:w-[330px]" />
                                <button className="btn btn-primary px-6 py-4 lg:w-[146px] md:w-[146px] lg:h-[64px] md:h-[64px] text-white font-bold">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='col-span-1'>
                        <h1 className='text-2xl mb-2 text-primary font-semibold'>Navigation</h1>
                        <ul>
                            <li className='hover:text-primary'><Link to="/">Home</Link></li>
                            <li className='hover:text-primary'><Link to="/">Favorite</Link></li>
                            <li className='hover:text-primary'><Link to="/">About</Link></li>
                            <li className='hover:text-primary'><Link to="/">Blog</Link></li>
                        </ul>
                    </div>
                    <div className='col-span-2'>
                        <h1 className='text-2xl mb-2 text-primary font-semibold'>About Our Food</h1>
                        <p>Italian cuisine emphasizes the use of fresh, seasonal, and locally sourced ingredients. Fresh herbs, vegetables, fruits, meats, and cheeses are staples of the Italian diet, and many dishes are prepared with minimal processing or seasoning to highlight the natural flavors of the ingredients.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='py-6 text-sm text-center text-gray-400'>
                © 2023 nextPage Inc. All rights reserved.
            </div>
        </div>
        </div>
    );
};

export default Footer;