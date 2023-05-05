import React, { useEffect, useState } from 'react';
import CartRecipe from '../CartRecipe/CartRecipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('https://food-lover-server-abdullahwb.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="overflow-scroll md:overflow-hidden w-full">
            <table className="table lg:w-[80%] mx-auto my-[130px]">
                {/* head */}
                <tbody className='w-full'>
                    {/* row 1 */}
                    {
                        recipes.map(recipe => <CartRecipe
                            key={recipe.id}
                            recipe={recipe}
                        ></CartRecipe>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Recipes;