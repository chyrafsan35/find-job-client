import React from 'react';
import { Link } from 'react-router';

const Logo = ({className = ""}) => {
    return (
        <div>
            <Link to={'/'} className={`font-medium ${className}`}>findJOB</Link>
        </div>
    );
};

export default Logo;