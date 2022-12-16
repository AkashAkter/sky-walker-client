import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='mt-20'>
            <div className="home-banner py-60">
                <div>

                </div>
                <div>
                    <div class="grid grid-cols-5 gap-4">

                        <div class="col-span-3 lg:ml-40 md:ml-20">
                            <h1 className="banner-title text-white text-7xl">
                                Shop With Us
                            </h1>
                            <p className='text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quaerat quo consectetur ullam quam voluptatibus, exercitationem commodi et. Voluptate dolor ratione ducimus inventore minima voluptatibus corporis obcaecati unde, eligendi vel quas quos possimus, perferendis saepe, veniam iusto tenetur ab. Consectetur fugit vel delectus nulla, quisquam quia dignissimos officiis tenetur cumque, assumenda beatae consequatur, dolorem voluptatibus ipsum facilis et nemo possimus? Temporibus, ipsa a repellendus doloremque maiores quae saepe in aspernatur commodi iste aut qui vero minima velit odit et. Facilis non eligendi excepturi quos vitae dignissimos iste sunt ipsa cum, in magnam fugiat provident saepe nemo cupiditate, neque nostrum explicabo?</p>
                            <div>
                                <button className='text-white border px-8 py-4 mr-2 hover:bg-white hover:text-black'>Shop Now</button>
                                <button className='text-black bg-white border px-8 py-4 hover:bg-transparent hover:text-white'>Shop Now</button>
                            </div>


                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Header;