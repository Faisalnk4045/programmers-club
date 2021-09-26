import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header text-center p-3 rounded shadow-sm'>
            <h2>Make the ultimate programmers club</h2>
            <p className='pt-2'>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler</p>
            <h3>Total Budget: 10 Million</h3>
        </div>
    );
};

export default Header;