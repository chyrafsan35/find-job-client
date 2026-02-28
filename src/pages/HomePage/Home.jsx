import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';

const Home = () => {
    return (
        <div className="w-11/12 sm:w-3/4 lg:w-1/2 mx-auto mt-10">

            {/* Input Container */}
            <div className="flex flex-col md:flex-row bg-white border border-gray-300 rounded-xl md:rounded-full shadow-md overflow-hidden">

                {/* First Input */}
                <div className="flex items-center px-4 py-3 flex-1">
                    <IoIosSearch size={25} />
                    <input
                        type="text"
                        placeholder="Job title or keywords"
                        className="w-full ml-2 outline-none text-sm"
                    />
                </div>

                {/* Divider */}
                <div className="hidden md:block h-8 w-px my-auto bg-gray-300"></div>
                <div className="block md:hidden h-px w-full bg-gray-200"></div>

                {/* Second Input */}
                <div className="flex items-center px-4 py-3 flex-1">
                    <IoLocationOutline size={25} />
                    <input
                        type="text"
                        placeholder="City, state, zip code, or 'remote'"
                        className="w-full ml-2 outline-none text-sm"
                    />
                </div>

                {/* Desktop Button (Inside) */}
                <div className="hidden md:flex items-center">
                    <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition rounded-full cursor-pointer">
                        Search
                    </button>
                </div>

            </div>

            {/* Mobile Button (Outside) */}
            <button className="md:hidden w-full mt-4 bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition rounded-lg cursor-pointer">
                Search
            </button>

        </div>
    );
};

export default Home;