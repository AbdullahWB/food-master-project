import React, { useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { toast } from 'react-hot-toast';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { addToDb } from '../../Utils/FackDb';

const CartRecipe = ({ recipe }) => {
    const { category_id, ingredients, rating, price, instructions, img, name, loading, id } = recipe;
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
        <div className='w-full'>
            <tr className='lg:grid lg:grid-cols-12 flex w-full'>
                <th className='col-span-1'>
                    {/* {category_id} */}
                </th>
                <td className='col-span-4'>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">Italy</div>
                        </div>
                    </div>
                </td>
                <td className='col-span-2'>
                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-primary'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                </td>
                <td className='col-span-1'>
                    <span className=''>Price: {price}$</span>
                </td>
                <td className='col-span-2'>
                    <button className="btn btn-primary btn-outline text-white" onClick={() => handleFavoriteClick(id)} disabled={click}>
                        {click ? 'Added to Favorites' : 'Add Favorite'}
                    </button>
                </td>
                <th className='col-span-2'>
                    <>
                        <Link className='btn btn-primary text-white' to={`/foodDetails/${id}`}>View Details</Link>
                    </>
                </th>
            </tr>

        </div>
    );
};

export default CartRecipe;