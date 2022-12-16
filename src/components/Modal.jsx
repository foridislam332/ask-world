import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

const Modal = ({ content, toggle }) => {
    const { title, author, image, details, tags, date } = content;
    return (
        <div className='fixed h-screen w-screen grid place-items-center top-0 left-0 z-10'>
            <div onClick={toggle} className='fixed w-screen h-screen bg-black opacity-70 top-0 left-0 z-20'></div>

            <div className='w-2/3 h-3/4 bg-white drop-shadow-xl overflow-y-scroll p-8 z-50'>

                <button onClick={toggle} className='absolute top-2 right-2 bg-primary p-1 rounded-full text-white'>
                    <MdOutlineClose size="24px" />
                </button>
                <h1 className='text-2xl font-bold leading-normal text-text-color mb-2'>{title}</h1>
                <span className='font-p-font'>{date}</span>

                <div>
                    <img className='m-auto' src={image} alt="" />
                </div>

                <p className='font-p-font mt-8 text-lg text-text-color leading-9'>{details}</p>

                <div className='flex items-center justify-between mt-8'>
                    <div className='flex items-center cursor-pointer'>
                        <span className='text-xl bg-primary font-bold text-white p-2 h-10 w-10 rounded-full grid place-items-center mr-3'>{author.slice(0, 1)}</span>
                        <p className='text-lg'>{author}</p>
                    </div>

                    {/* tags */}
                    <div className='flex items-center gap-3'>
                        {
                            tags.map((tag) => <span key={tag} className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color cursor-pointer'>
                                <span className='text-cyan-500 drop-shadow-lg'>#</span> {tag}
                            </span>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;