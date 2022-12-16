import React from 'react';
import { Link } from 'react-router-dom';


const Category = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:mx-40 md:mx-20'>
            <Link>
                <div className="card w-88 bg-base-100 shadow-xl image-full ">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>

                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="card w-88 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>

                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="card w-88 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>

                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Category;