import { useDispatch, useSelector } from 'react-redux';
import { removePost } from './postsSlice';
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";


const Posts = () => {

  const dispatch = useDispatch();

  const list = useSelector((state) => state.posts.list);
  
  return (
    <div className='flex flex-col items-center justify-center mt-20 mb-20'>
        {list.map((item) => {
            return <div key={item.id} className='bg-white w-96 p-8 m-6 rounded-lg shadow-lg border border-gray-100'>
                        <h1 className='text-2xl font-medium mb-4 text-gray-800 text-center'>Post {item.id}</h1>
                        <h2 className='text-base font-light mb-6 text-gray-500 text-center'>{item.title}</h2>
                        <div className='flex justify-center'>
                            <Link to={'/post/'+item.id}><Button variant="filled" size="lg" ripple={true}>Details</Button></Link>
                            <Button className='ml-5' size="lg" variant="text" color="blue" ripple={true} onClick={() => dispatch(removePost(item.id))}>Delete</Button>
                        </div>
                   </div>
        })}
    </div>
  )
}

export default Posts
