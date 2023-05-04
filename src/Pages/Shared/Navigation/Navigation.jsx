import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navigation = () => {
    const { user, LogOut } = useContext(AuthContext)

    const handleLogout = () => {
        LogOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='bg-orange-50'>
            <div className="navbar  w-[80%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='hover:text-primary mx-2'><NavLink className={({ isActive }) => isActive ? "active text-decoration-none text-white text-bold" : "text-decoration-none text-black"} to="/">Home</NavLink></li>
                            <li className='hover:text-primary mx-2'><NavLink className={({ isActive }) => isActive ? "active text-decoration-none text-white text-bold" : "text-decoration-none text-black"} to="/recipes">Recipes</NavLink></li>
                            <li className='hover:text-primary mx-2'><NavLink className={({ isActive }) => isActive ? "active text-decoration-none text-white text-bold" : "text-decoration-none text-black"} to="/favorite">Favorite</NavLink></li>
                            <li className='hover:text-primary mx-2'><NavLink className={({ isActive }) => isActive ? "active text-decoration-none text-white text-bold" : "text-decoration-none text-black"} to="/about">About</NavLink></li>
                            <li className='hover:text-primary mx-2'><NavLink className={({ isActive }) => isActive ? "active text-decoration-none text-white text-bold" : "text-decoration-none text-black"} to="/blog">Blog</NavLink></li>
                            <div className="w-10 ml-5 rounded-full mr-5">
                                {
                                    user && <img className='w-full h-full rounded-full' title={user.displayName} src={user ? user.photoURL : "https://w7.pngwing.com/pngs/753/432/png-transparent-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-people-thumbnail.png"} />
                                }
                            </div>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-bold">Food <span className='text-primary ml-1'>Master</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:text-primary mx-2'><NavLink className={({ isActive }) => isActive ? "active text-decoration-none text-white text-bold" : "text-decoration-none text-black"} to="/">Home</NavLink></li>
                        <li className='hover:text-primary mx-2'><NavLink className={({ isActive }) => isActive ? "active text-decoration-none text-white text-bold" : "text-decoration-none text-black"} to="/recipes">Recipes</NavLink></li>
                        <li className='hover:text-primary mx-2'><NavLink className={({ isActive }) => isActive ? "active text-decoration-none text-white text-bold" : "text-decoration-none text-black"} to="/favorite">Favorite</NavLink></li>
                        <li className='hover:text-primary mx-2'><NavLink className={({ isActive }) => isActive ? "active text-decoration-none text-white text-bold" : "text-decoration-none text-black"} to="/about">About</NavLink></li>
                        <li className='hover:text-primary mx-2'><NavLink className={({ isActive }) => isActive ? "active text-decoration-none text-white text-bold" : "text-decoration-none text-black"} to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="w-10 lg:flex hidden rounded-full mr-5">
                        {
                            user && <img className='w-full h-full rounded-full' title={user.displayName} src={user ? user.photoURL : "https://w7.pngwing.com/pngs/753/432/png-transparent-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-people-thumbnail.png"} />
                        }
                    </div>
                    {
                        user ? <Link to='/' onClick={handleLogout} className="btn btn-primary text-white">Logout</Link> : <Link to='/login' className="btn btn-primary text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navigation;