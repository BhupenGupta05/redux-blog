import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initializeBlogs } from "./reducers/blogReducer"
import NewBlog from "./components/NewBlog"
import Blogs from './components/Blogs'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
  },[])

  return (
    <div>
      <h2>Blogs</h2>
      <NewBlog />
      <Blogs />
    </div>
  )
}

export default App