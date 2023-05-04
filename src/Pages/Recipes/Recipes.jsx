import React, { useEffect, useState } from 'react';
import CartRecipe from '../CartRecipe/CartRecipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            {
                recipes.map(recipe => <CartRecipe
                    key={recipe.id}
                    recipe={recipe}
                ></CartRecipe>)
            }
        </div>
    );
};

export default Recipes;