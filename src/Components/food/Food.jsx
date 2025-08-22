import React from 'react'

const Food = ({ food }) => {
    const handleOrder = () => {
        console.log('ordered meal');
    }
    return (
        <div className="food-card border p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{food.strMeal}</h2>
            <img className="w-full h-auto rounded" src={food.strMealThumb} alt={food.strMeal} />
            <button onClick={handleOrder} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">Order Now</button>
        </div>
    )
}

export default Food