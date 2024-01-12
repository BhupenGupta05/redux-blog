import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'

const NewBlog = () => {
  const dispatch = useDispatch()

    const addBlog = async (e) => {
      e.preventDefault()
        const title = e.target.title.value
        const author = e.target.author.value
        const url = e.target.url.value
        e.target.title.value = ''
        e.target.author.value = ''
        e.target.url.value = ''
        dispatch(createBlog({title, author, url}))
    }
  return (
    <div>
      <h2>New Blog</h2>
      <form onSubmit={addBlog}>
        <div>
          Title:
          <input className=' bg-slate-200 px-4 py-1 m-1' type="text" name="title" />
        </div>

        <div>
          Author:
          <input className=' bg-slate-200 px-4 py-1 m-1' type="text" name="author" />
        </div>

        <div>
          URL:
          <input className=' bg-slate-200 px-4 py-1 m-1' type="text" name="url" />
        </div>

        <button type="submit" className=' bg-blue-500 px-2 py-1'>Add</button>
      </form>
    </div>
  )
}

export default NewBlog