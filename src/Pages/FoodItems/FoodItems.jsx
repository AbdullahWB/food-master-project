import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { addToDb } from '../../Utils/FackDb';

const FoodItems = ({ item }) => {
    const { category_id, ingredients, rating, price, instructions, img, name, loading, id } = item;
    const navigation = useNavigation();
    console.log(navigation.state)
    if (navigation.state === "loading") {
        return <Loading />;
    }
    const [click, setClick] = useState()
    const handleFavoriteClick = (id) => {
        setClick(true);
        addToDb(id)
        toast.success("Your item has been added to favorites ❤️❤️")
    };


    return (
        <div>
            <div className="w-full h-full grid md:grid-row-2 grid-row-1 p-7 bg-base-100 shadow-xl rounded-lg">
                <figure><img className='w-full h-full object-cover rounded-lg' src={img} alt="Movie" /></figure>
                <div className="card-body p-0 md:p-5 md:pt-0 pt-5">
                    <h2 className="card-title text-4xl text-primary">{name}</h2>
                    <p>Needed Items: {ingredients}</p>
                    <p>{instructions.length < 250 ? <>{instructions}</> : <>{instructions.slice(0, 150)} .... <Link className='text-primary' to={`/foodDetails/${id}`}>Read More</Link> </>}</p>
                    <div className='flex justify-start'>
                        <span className='text-xl mr-2'>{rating}</span>
                        <Rating
                            className='mt-1'
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-primary'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                    <span className='text-xl'>Price: {price}$</span>
                    <button className="btn btn-primary btn-outline text-white" onClick={()=> handleFavoriteClick(id)} disabled={click}>
                        {click ? 'Added to Favorites' : 'Add Favorite'}
                    </button>
                    <Link className='btn btn-primary text-white' to={`/foodDetails/${id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodItems;