
const Navber = () => {
    return (
        <>
            <nav
                className="flex items-center justify-between w-full mx-auto px-20 py-4 bg-gray-600 shadow-lg"
            >
                <div
                    className="leftNav text-3xl font-bold"
                >
                    <h1 
                    
                    >Seafood Recipes</h1>
                </div>
                <div
                    className="navMenu"
                >
                    <ul
                        className="flex space-x-4 items-center justify-center"
                    >
                        <li
                            className="hover:text-blue-400 "
                        >
                            <a
                                href=""
                                className="text-xl font-semibold"
                            >
                                Home
                            </a>
                        </li>
                        <li
                            className="hover:text-blue-400 "
                        >
                            <a
                                href=""
                                className="text-xl font-semibold"
                            >
                                Recipes
                            </a>
                        </li>
                        <li
                            className="hover:text-blue-400 "
                        >
                            <a
                                href=""
                                className="text-xl font-semibold"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    className="rightNav"
                >
                    <button
                        className="btn bg-blue-600 px-4 py-2 rounded text-white font-semibold hover:bg-blue-400 cursor-pointer"
                    >Login</button>
                </div>
            </nav>

        </>
    )
}

export default Navber