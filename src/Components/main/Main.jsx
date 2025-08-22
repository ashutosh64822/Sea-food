import React, { use } from 'react'
import Food from '../food/Food'

const Main = ({ fetchData }) => {
    const foods = use(fetchData)

    return (
        <>
            <div
                className=' my-4'
            >
                <h1
                    className='text-3xl font-semibold text-center '
                >
                    Seafood Dishes
                </h1>
                <div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'
                >
                    {foods.meals.map(food => <Food key={food.idMeal} food={food} />)}
                </div>
            </div>

        </>
    )
}

export default Main