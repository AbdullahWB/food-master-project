import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cart = ({ master }) => {
    const {name, yearsOfExperience, recipesCount, likesCount, photoUrl, description, id} = master;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl p-8">
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                    <figure><img className='w-full h-[250px] object-cover rounded-lg' src={photoUrl} alt="Shoes" /></figure>
                    <div>
                        <h1 className='text-[22px] text-primary font-medium'>{name}</h1>
                        <p className='mt-2 text-xl text-black'>Experience: {yearsOfExperience} year</p>
                        <p className='mt-2 text-xl text-black'>Recipes: {recipesCount}</p>
                        <span className='mt-2 text-xl text-black flex'>Like Count: <span className='flex'><FaHeart className='mt-[6px] mx-1 text-red-600'></FaHeart> {likesCount}</span></span>
                    </div>
               </div>
                <div className="card-body md:p-0 p-0 md:pt-5 pt-5">
                    <h2 className="card-title">Description:</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/category/${id}`}><button className="btn btn-primary text-white">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;