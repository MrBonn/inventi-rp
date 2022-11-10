import Posts from './Posts/Posts';
import PostDetails from './Posts/PostDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPosts } from './Posts/postsSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({ limit: 6 }))
  }, [dispatch])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Posts />} exact/>
          <Route path='/post/:id' element={<PostDetails />} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
