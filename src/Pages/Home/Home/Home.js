import React from 'react';
import Category from '../Category/Category';
import Sell from '../ExtraSection/Sell';
import Support from '../ExtraSection/Support';
import Header from '../Header/Header';
import NewArrivals from '../NewArrivals/NewArrivals';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Support></Support>
            <Category></Category>
            <NewArrivals></NewArrivals>
            <Sell></Sell>
        </div>
    );
};

export default Home;