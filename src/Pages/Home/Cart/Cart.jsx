import React from 'react';
import { FaHeart } from "react-icons/fa";

const Cart = ({ master }) => {
    const {name, yearsOfExperience, recipesCount, likesCount, photoUrl, description, id} = master;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl p-8">
                <div className='grid grid-cols-2 gap-5'>
                    <figure><img className='w-full h-[250px] object-cover rounded-lg' src={photoUrl} alt="Shoes" /></figure>
                    <div>
                        <h1 className='text-[22px] text-primary font-medium'>{name}</h1>
                        <p className='mt-2 text-xl text-black'>Experience: {yearsOfExperience}</p>
                        <p className='mt-2 text-xl text-black'>Recipes: {recipesCount}</p>
                        <span className='mt-2 text-xl text-black flex'>Like Count: <span className='flex'><FaHeart className='mt-[7px] mx-1 text-red-600'></FaHeart> {likesCount}</span></span>
                    </div>
               </div>
                <div className="card-body">
                    <h2 className="card-title">Description:</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white">View Recipes</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;