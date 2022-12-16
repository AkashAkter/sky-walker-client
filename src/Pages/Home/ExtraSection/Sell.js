import React from 'react';
import './Sell.css'

const Sell = () => {
    return (
        <div className='sell-banner my-20 py-20 text-center'>
            <div className='text-white'>
                <h1>SPECIAL PROMO</h1>
                <h1 className='text-5xl my-6'>Summer Sale</h1>
                <p>Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
            </div>
            <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max my-8">
                <div className="flex flex-col p-6 bg-white rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span className='text-cyan-400' style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-6 bg-white rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span className='text-cyan-400' style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-6 bg-white rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span className='text-cyan-400' style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-6 bg-white rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span className='text-cyan-400' style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
            </div>
            <button className='border py-2 px-10 text-white font-bold hover:bg-white hover:text-black'>SHOP NOW</button>
        </div>
    );
};

export default Sell;