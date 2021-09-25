import React from 'react';

const Meals = (props) => {
    const { strMeal, strCategory, strMealThumb, strArea } = props.meal;
    return (
        <div className="col-md-6">
            <div className="card" style={{ "width": "18rem" }}>
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{strMeal}</h3>
                    <h5>Category: {strCategory}</h5>
                    <h5>Area: {strArea}</h5>
                    <button className="btn btn-warning" onClick={() => props.handleAddToCart(props.meal)}>
                        <i class="fas fa-shopping-cart"></i> Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Meals;