import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center text-light bg-dark py-3'>
            <p>
                &copy; Copyright {new Date().getFullYear()} - All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;