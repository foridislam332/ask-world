import React from 'react';
import { useSelector } from 'react-redux';
import BlogCart from '../../components/BlogCart';

const ReadingHistory = () => {
    const reads = useSelector((state) => state.blog.reads);
    console.log(reads)
    return (
        <div>
            <div className='border-b-2 border-primary my-4 mt-10'>
                <h1 className='text-4xl text-right'>Reading History</h1>
            </div>
            {
                reads.map((read) => <BlogCart key={read._id} blog={read} />)
            }
        </div>
    );
};

export default ReadingHistory;