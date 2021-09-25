import React from 'react';
import './ShowData.css'

const ShowData = (props) => {
    // console.log(props);
    const { strMealThumb, strMeal, strInstructions, strYoutube } = props.meal;
    return (
        <div className="food">
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>{strInstructions.slice(0, 250)}</p>
            <div>
                <button onClick={() => props.handleAddToCart(props.meal)}>Show Details</button>
                <button><a href={strYoutube}>Watch Video</a></button>
            </div>
        </div>
    );
};

export default ShowData;