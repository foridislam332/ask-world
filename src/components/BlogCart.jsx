import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { alreadyRead, readBlog } from '../redux/actionCreators/blogActions';
import Modal from './Modal';

const BlogCart = ({ blog }) => {
    const { title, author, image, details, tags, date } = blog;
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const [show, setShow] = useState(false);
    return (
        <>
            <div className='bg-white drop-shadow-xl mt-2 mb-10 py-10 px-14'>
                <div className='flex'>
                    <div className='h-36 w-36 max-w-36 overflow-hidden bg-center bg-cover' style={{ backgroundImage: `url(${image})` }}>
                    </div>
                    <div className='ml-8 md:w-3/4'>
                        <h1 className='text-4xl font-bold leading-normal text-text-color mb-2'>{title}</h1>
                        <span className='font-p-font'>{date}</span>
                    </div>
                </div>

                {pathname.includes('reading-history') ? <p className='font-p-font mt-8 text-lg text-text-color leading-9'>{details}</p>
                    :
                    <p className='font-p-font mt-8 text-lg text-text-color leading-9'>{details.slice(0, 200)}...</p>
                }

                {/* tags */}
                <div className='flex items-center gap-3 mt-5 cursor-pointer'>
                    {
                        tags.map((tag) => <span key={tag} className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color'>
                            <span className='text-cyan-500 drop-shadow-lg'>#</span> {tag}
                        </span>)
                    }
                </div>

                <div className='flex items-center justify-between mt-8'>
                    <div className='flex items-center'>
                        <span className='text-xl bg-primary font-bold text-white p-2 h-10 w-10 rounded-full grid place-items-center mr-3'>{author.slice(0, 1)}</span>
                        <p className='text-lg'>{author}</p>
                    </div>
                    {pathname.includes('reading-history') ?
                        <button onClick={() => dispatch(alreadyRead(blog._id))} className='text-white bg-primary px-4 py-2'>Already Read</button>
                        :
                        <button onClick={() => {
                            dispatch(readBlog(blog))
                            setShow(!show)
                        }} className='text-white bg-text-color px-4 py-2'>Read More ...</button>}
                </div>
            </div>
            {show && <Modal content={blog} toggle={() => setShow(!show)} />}
        </>
    );
};

export default BlogCart;