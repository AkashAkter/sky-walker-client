import React from 'react';

const Footer = () => {
    return (
        <div className='grid lg:grid-cols-9 md:grid-cols-2 gap-4 lg:px-36 md:px-20 px-10 py-20 text-white bg-[#04091e] mt-20'>
            <div className=' lg:col-span-4 flex items-center'>
                <div>
                    <h4>About US</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    <br />
                    <p>Copyright ©2022 All rights reserved | This template is made with</p>
                </div>
            </div>
            <div className=' lg:col-span-3 flex items-center'>
                <div>
                    <h4>About US</h4>

                </div>
            </div>
            <div className=' lg:col-span-2 flex items-center'>
                <div>
                    <h4>About US</h4>

                </div>
            </div>
        </div>
    );
};

export default Footer;