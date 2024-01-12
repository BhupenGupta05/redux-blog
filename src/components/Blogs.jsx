import { useDispatch, useSelector } from "react-redux"
import { deleteBlog, updateBlog } from "../reducers/blogReducer"

const Blog = ({blog, handleLikes, handleDelete}) => {
    return (
      <div>
        <p>{blog.title}</p>
        <p>{blog.author}</p>
        <p>{blog.url}</p>
        <div className="flex">
          <p>{blog.likes}</p>
          <button type="button" onClick={handleLikes} className=" bg-blue-800 px-2 py-1">like</button>
        </div>
        <button type="button" onClick={handleDelete} className=" bg-slate-400 px-2 py-1">delete</button>
      </div>
    )
  }

const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blogs)

  const handleLikes = (blog) => {
    dispatch(updateBlog(blog.id, {...blog, likes: blog.likes + 1}))
  }

  const handleBlog = (blog) => {
    dispatch(deleteBlog(blog.id))
  }
  return (
    <ul>
        {blogs.map(blog => 
            <Blog 
            key={blog.id}
            blog={blog}
            handleLikes={() => handleLikes(blog)}
            handleDelete={() => handleBlog(blog)}
            />
        )}
    </ul>
  )
}

export default Blogs