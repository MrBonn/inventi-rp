/* eslint-disable eqeqeq */
import React from 'react';
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Button } from "@material-tailwind/react";


const PostDetails = () => {

  const { id } = useParams();

    const list = useSelector((state) => {
        const posts = state.posts.list
         return posts.find((item) => item.id == id)
    });

    const image = `https://picsum.photos/id/${list.id}/300`
  
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='bg-white flex flex-col items-center justify-center w-96 p-8 m-8 rounded-lg shadow-lg border border-gray-100'>
                <img alt={list.id} src={image} className='rounded-lg'></img>
                <h3 className='text-base font-medium mt-6 mb-2 text-blue-500 text-center'>Post: {list.id}</h3>
                <h2 className='text-2xl font-medium mb-4 text-gray-800 text-center'>{list.title}</h2>
                <p className='text-base font-light mb-6 text-gray-500 text-center'>{list.body}</p>
                <Link to='/'><Button variant="filled" size="lg" ripple={true}>Go back</Button></Link>
            </div>
        </div>
    )
}

export default PostDetails;