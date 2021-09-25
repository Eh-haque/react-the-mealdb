import React, { useEffect, useState } from 'react';
import ShowCart from '../ShowCart/ShowCart';
import ShowData from '../ShowData/ShowData';
import './LoadMeal.css'


const LoadMeal = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayMeals, setDisplayMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setDisplayMeals(data.meals);
            })
    }, [])

    // cart handler
    const handleAddToCart = (meal) => {
        const newCart = [...cart, meal];
        setCart(newCart)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setDisplayMeals(data.meals));
    }

    return (
        <>
            <div className="search-container">
                <input type="text" name="" id="" placeholder="Search Food" onChange={handleSearch} />
            </div>
            <div>
                <div className="container">
                    <div className="food-container">
                        {
                            displayMeals.map(meal => <ShowData meal={meal} key={meal.idMeal} handleAddToCart={handleAddToCart}></ShowData>)
                        }
                        {
                            meals.map(meal => <ShowData meal={meal} key={meal.idMeal} handleAddToCart={handleAddToCart}></ShowData>)
                        }
                    </div>
                    <div className="cart-container">
                        <ShowCart cart={cart}></ShowCart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadMeal;