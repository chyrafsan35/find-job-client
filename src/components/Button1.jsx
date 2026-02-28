import React from 'react';

const Button1 = ({ children }) => {
    return (
        <div>
            <button className='flex items-center gap-3 bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition rounded-lg cursor-pointer'>{children}</button>
        </div>
    );
};

export default Button1;