import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initializeBlogs } from "./reducers/blogReducer"
import Notification from './components/Notification'
import NewBlog from "./components/NewBlog"
import Blogs from './components/Blogs'
import Menu from './components/Menu'
import { Routes, Route } from "react-router-dom"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
  },[])

  return (
    <div>
      <h2 className="text-3xl">Blogs</h2>
      <Notification />
      <NewBlog />
      <Blogs />
    </div>
  )
}

export default App