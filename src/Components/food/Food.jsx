import React from 'react'

const Food = ({ food }) => {
    const handleOrder = (e) => {
        e.target.innerText = 'Ordered'
    }
    return (
        <div
            className="food-card border p-4 rounded shadow-lg"
        >
            <h2
                className="text-xl font-semibold mb-4"
            >
                {food.strMeal}
            </h2>
            <img
                className="w-50 h-50 rounded mb-3"
                src={food.strMealThumb}
                alt={food.strMeal} />
            <button
                onClick={handleOrder}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
            >
                Order Now
            </button>
        </div>
    )
}

export default Food