import React from 'react';

const ShowCart = (props) => {
    console.log(props.cart);
    return (
        <div>
            <h3>Selected Meals</h3>
            <h4>{props.cart.map(mealName => <li key={mealName.idMeal}>{mealName.strMeal}</li>)}</h4>
        </div>
    );
};

export default ShowCart;