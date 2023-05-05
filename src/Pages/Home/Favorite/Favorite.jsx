import React, { useEffect, useState } from 'react';
import { deleteShoppingCart, getStoredCart, removeFormDB } from '../../../Utils/FackDb';
import FavCart from '../../FavCart/FavCart';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Favorite = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('https://food-lover-server-abdullahwb.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log(error))
    }, [])

    // let total = 0;
    // if (recipes.length > 0) {
    //     for (const product of recipes) {
    //         total = total + product.price * 1
    //     }
    // }

    const handleRemoveItems = id => {
        const remaining = cart.filter(product => product.id !== id)
        setRecipes(remaining)
        removeFormDB(id)
        toast.error('Product Removed! 🔥')
    }

    let cart = [];
    const myCartJob = getStoredCart()
    for (const id in myCartJob) {
        const foundJob = recipes.find(job => job.id == id);
        if (foundJob) {
            cart.push(foundJob);
        }
    }
    console.log(cart);

    const deleteCartHandler = () => {
        deleteShoppingCart()
        if (recipes.length > 0) {
            setRecipes([])
            deleteShoppingCart()
            return toast.success('All Items Removed! 🙄')
        }
        return toast.error('No Shopping Items Available! 😁')
    }

    const orderHandler = () => { 
        if (recipes.length > 0) {
            setRecipes([])
            deleteShoppingCart()
            return toast.success('Order Done! 🙂')
        }
        return toast.error('No Shopping Items Available! 😁')
    }

    return (
        <div className='w-[40%] mx-auto my-[130px]'>
            <ul className='flex flex-col divide-y divide-gray-700'>
                {
                    cart.map(recipe => <FavCart
                        key={recipe.id}
                        recipe={recipe}
                        handleRemoveItems={handleRemoveItems}
                    ></FavCart>)
                }
            </ul>
            <div className='space-y-1 text-right'>
                <p className='text-sm text-gray-400'>
                    Not including taxes and shipping costs
                </p>
            </div>
            <div className='flex justify-end mt-4 space-x-4'>
                {
                    recipes.length >0 ? <button onClick={deleteCartHandler} className='btn btn-outline btn-primary'>Clear Cart</button> : <Link to="/"><button className='btn btn-outline btn-primary'>Bake to cart</button></Link>
                }
                <button onClick={orderHandler} className='btn btn-primary'>Place Order</button>
            </div>
        </div>
    );
};

export default Favorite;