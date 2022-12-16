import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCart from '../../components/BlogCart';
import LatestCart from '../../components/LatestCart';
import { tagFiltering, toggleButton } from '../../redux/actionCreators/filterActions';
import { MdOutlineClose } from 'react-icons/md';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const dispatch = useDispatch();
    const buttons = useSelector((state) => state.filter.filters.buttons);
    const tags = useSelector((state) => state.filter.tags);
    const [inputDate, setInputDate] = useState('');
    useEffect(() => {
        fetch('./blogs.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data))
    }, [])

    const inputValue = (date) => {
        const newDate = new Date(date).toString().slice(0, 15)
        return setInputDate(newDate)
    }

    let content;

    if (blogs.length) {
        content = blogs.map((blog) => <BlogCart key={blog._id} blog={blog} />)
    }

    console.log(inputDate)

    if (blogs.length && inputDate.length === 15) {
        content = blogs.filter((blog) => {
            const newDate = new Date(blog.date).toString().slice(0, 15);
            return inputDate === newDate
        }).map((blog) => <BlogCart key={blog._id} blog={blog} />)
    }

    if (blogs.length && buttons.length && buttons.includes('recent')) {
        content = blogs.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        }).map((blog) => <BlogCart key={blog._id} blog={blog} />)
    }

    if (blogs.length && buttons.length && buttons.includes('old')) {
        content = blogs.sort((a, b) => {
            return new Date(a.date) - new Date(b.date)
        }).map((blog) => <BlogCart key={blog._id} blog={blog} />)
    }

    if (blogs.length && tags.length) {
        content = blogs.filter((blog) => {
            if (tags.includes(blog.tags[1])) {
                return tags.includes(blog.tags[1])
            }
            if (tags.includes(blog.tags[2])) {
                return tags.includes(blog.tags[2])
            }
            return tags.includes(blog.tags[0])

        }).map((blog) => <BlogCart key={blog._id} blog={blog} />)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 mt-14 gap-6'>
            <div className='col-span-3'>
                {/* sort wraper */}
                {tags.length ? (
                    <div className='flex items-center gap-4 bg-white h-12 drop-shadow-xl p-3'>
                        {
                            tags.map((tag, index) => (
                                <div key={index} className='flex items-center gap-2 bg-white drop-shadow-lg px-3 py-[2px] text-text-color'>
                                    <span>{tag}</span>
                                    <button
                                        onClick={() => dispatch(tagFiltering(tag))}
                                    ><MdOutlineClose size='20px' /></button>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div className='flex items-center justify-between gap-4 bg-white h-12 drop-shadow-xl p-3'>
                        <p>Sort by</p>
                        <div className='border px-2'>
                            <span className='mr-2'>Date:</span>
                            <input type="date" onChange={(e) => inputValue(e.target.value)} />
                        </div>
                        <div className='flex items-center'>
                            <button onClick={() => dispatch(toggleButton('recent'))}>
                                <span className={`h-3 w-3 inline-block mr-1 ${buttons.includes('recent') ? 'bg-primary' : 'bg-gray-400'}`}></span>
                                <span>Recent</span>
                            </button>

                            <button onClick={() => dispatch(toggleButton('old'))}>
                                <span className={`h-3 w-3 inline-block mr-1 ${buttons?.includes('old') ? 'bg-primary' : 'bg-gray-400'} ml-2`}></span>
                                <span className=''>Old</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* blog content */}
                {content}
            </div>
            <div>
                {/* Latest Articles */}
                <div>
                    <h2 className='text-3xl mb-3 mt-2 font-bold text-text-color border-b border-primary'>Latest Articles</h2>
                    {
                        blogs.slice(0, 3).map((item) => <LatestCart key={item._id} item={item} />)
                    }
                </div>

                {/* tags */}
                <div className='mt-10'>
                    <h2 className='text-3xl mb-3 mt-2 font-bold text-text-color border-b border-primary'>Tags</h2>
                    <span className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color inline-block mr-3 mb-3 cursor-pointer'
                        onClick={() => dispatch(tagFiltering('Travel'))}
                    >
                        <span className='text-cyan-500 drop-shadow-lg'>#</span> Travel
                    </span>
                    <span className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color inline-block mr-3 mb-3 cursor-pointer'
                        onClick={() => dispatch(tagFiltering('Food'))}
                    >
                        <span className='text-cyan-500 drop-shadow-lg'>#</span> Food
                    </span>

                    <span className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color inline-block mr-3 mb-3 cursor-pointer'
                        onClick={() => dispatch(tagFiltering('Life'))}
                    >
                        <span className='text-cyan-500 drop-shadow-lg'>#</span> Life
                    </span>

                    <span className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color inline-block mr-3 mb-3 cursor-pointer'
                        onClick={() => dispatch(tagFiltering('Tech'))}>
                        <span className='text-cyan-500 drop-shadow-lg'>#</span> Tech
                    </span>
                    <span className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color inline-block mr-3 mb-3 cursor-pointer'
                        onClick={() => dispatch(tagFiltering('Meatball'))}>
                        <span className='text-cyan-500 drop-shadow-lg'>#</span> Meatball
                    </span>

                    <span className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color inline-block mr-3 mb-3 cursor-pointer'
                        onClick={() => dispatch(tagFiltering('Sandos'))}>
                        <span className='text-cyan-500 drop-shadow-lg'>#</span> Sandos
                    </span>

                    <span className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color inline-block mr-3 mb-3 cursor-pointer'
                        onClick={() => dispatch(tagFiltering('Pinch'))}>
                        <span className='text-cyan-500 drop-shadow-lg'>#</span> Pinch
                    </span>

                    <span className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color inline-block mr-3 mb-3 cursor-pointer'
                        onClick={() => dispatch(tagFiltering("Cox's Bazar"))}>
                        <span className='text-cyan-500 drop-shadow-lg'>#</span> Cox's Bazar
                    </span>

                    <span className='bg-white drop-shadow-lg px-3 py-[2px] text-text-color inline-block mr-3 mb-3 cursor-pointer'
                        onClick={() => dispatch(tagFiltering("Beach"))}>
                        <span className='text-cyan-500 drop-shadow-lg'>#</span> Beach
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Home;