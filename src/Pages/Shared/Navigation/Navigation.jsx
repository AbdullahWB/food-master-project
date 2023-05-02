import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='bg-orange-50'>
            <div className="navbar  w-[80%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='hover:text-primary'><Link to="/">Home</Link></li>
                            <li className='hover:text-primary'><Link to="/">Favorite</Link></li>
                            <li className='hover:text-primary'><Link to="/">About</Link></li>
                            <li className='hover:text-primary'><Link to="/">Blog</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-bold">Food <span className='text-primary ml-1'>Master</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:text-primary'><Link to="/">Home</Link></li>
                        <li className='hover:text-primary'><Link to="/">Favorite</Link></li>
                        <li className='hover:text-primary'><Link to="/">About</Link></li>
                        <li className='hover:text-primary'><Link to="/">Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary text-white">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;