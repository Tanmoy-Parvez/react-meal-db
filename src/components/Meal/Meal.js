import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meals from '../Meals/Meals';
import "./Meal.css"

const Meal = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("/mealData.json")
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    const handleAddToCart = (meal) => {
        console.log(meal);
        const newCart = [...cart, meal];
        setCart(newCart)
    }
    return (
        <div className="row mt-5">
            <div className="col-md-9 px-5">
                <div className="row g-5">
                    {
                        meals.map(meal => <Meals
                            meal={meal}
                            handleAddToCart={handleAddToCart}
                        >
                        </Meals>)
                    }
                </div>
            </div>
            <div className="col-md-3">
                <Cart cart={cart} />
            </div>

        </div>
    );
};

export default Meal;