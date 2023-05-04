import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const FoodItems = ({ item }) => {
    const { category_id, rating, price, instructions, img, name } = item;
    const [click, setClick] = useState()
    const handleFavoriteClick = () => {
        setClick(true);
        toast.success("Your item has been added to favorites")
    };
    return (
        <div>
            <div className="card card-side w-full h-full grid grid-cols-2 p-7 bg-base-100 shadow-xl">
                <figure><img className='w-full h-full object-cover' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl text-primary">{name}</h2>
                    <p>{instructions}</p>
                    <div className='flex justify-start'>
                        <span className='text-xl mr-2'>{rating}</span>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <span className='text-xl'>Price: {price}$</span>
                    <button className="btn btn-primary text-white" onClick={handleFavoriteClick} disabled={click}>
                        {click ? 'Added to Favorites' : 'Add Favorite'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodItems;