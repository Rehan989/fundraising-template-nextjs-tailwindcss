import React from 'react';
import PricingMd from '../Components/Cards/Pricing-md';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

const pricing = () => {
    return <div>
        <Navbar />
        <div className="mt-6 my-[125px] grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mx-[120px] gap-10">
            <div className='inline-block'>
                <PricingMd />
            </div>
            <div className='inline-block '>
                <PricingMd />
            </div>
            <div className='inline-block'>
                <PricingMd />
            </div>
        </div>
        <Footer/>
    </div>;
};

export default pricing;
