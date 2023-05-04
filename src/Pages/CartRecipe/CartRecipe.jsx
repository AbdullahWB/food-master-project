import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { toast } from 'react-hot-toast';

const CartRecipe = ({recipe}) => {
    const { category_id,ingredients , rating, price, instructions, img, name, loading } = recipe;
    const navigation = useNavigation();
    console.log(navigation.state)
    if (navigation.state === "loading") {
        return <Loading />;
    }
    const [click, setClick] = useState()
    const handleFavoriteClick = () => {
        setClick(true);
        toast.success("Your item has been added to favorites")
    };
    return (
        <div className='w-[80%] mx-auto my-[130px]'>
            <div className="card card-side w-full h-full grid md:grid-cols-2 grid-cols-1 p-7 bg-base-100 shadow-xl">
                <figure><img className='w-full h-full object-cover' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl text-primary">{name}</h2>
                    <p>Needed Items: {ingredients}</p>
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

export default CartRecipe;