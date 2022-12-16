import React from 'react';

const LatestCart = ({ item }) => {
    const { title, image, date } = item;
    return (
        <div className='flex mb-4'>
            <div className='h-20 w-20 max-w-20 overflow-hidden bg-center bg-cover' style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className='ml-3 md:w-2/3'>
                <h1 className='text-sm font-bold leading-normal text-text-color mb-2'>{title.slice(0, 40)} ...</h1>
                <span className='font-p-font'>{date}</span>
            </div>
        </div>
    );
};

export default LatestCart;