import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const category = useLoaderData()
    console.log(category);
    return (
        <div>
            hello
        </div>
    );
};

export default Details;