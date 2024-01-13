import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { showNotification } from '../reducers/notificationReducer'
import useField from '../hooks/useField'
import { useNavigate } from 'react-router-dom'

const NewBlog = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const filterProps = ({reset, ...rest}) => rest

    const addBlog = async (e) => {
      
      e.preventDefault()

        const newBlog = {
          title: title.value,
          author: author.value,
          url: url.value,
          likes: 0
        }

        dispatch(createBlog(newBlog))
        dispatch(showNotification(`${newBlog.title} by ${newBlog.author} added`, 5))

        title.onChange({ target: { value: '' } })
        author.onChange({ target: { value: '' } })
        url.onChange({ target: { value: '' } })
        
        // navigate('/')
        
    }
    
  return (
    <div>
      <h2>New Blog</h2>
      <form onSubmit={addBlog}>
        <div>
          Title:
          <input className=' bg-slate-200 px-4 py-1 m-1' {...filterProps(title)} />
        </div>

        <div>
          Author:
          <input className=' bg-slate-200 px-4 py-1 m-1' {...filterProps(author)} />
        </div>

        <div>
          URL:
          <input className=' bg-slate-200 px-4 py-1 m-1' {...filterProps(url)} />
        </div>

        <button type="submit" className=' bg-blue-500 px-2 py-1' >Add</button>
        <button onClick={() => { title.reset(); author.reset(); url.reset(); }} type='button' className=' bg-slate-400 px-2 py-1' >Reset</button>
      </form>
    </div>
  )
}

export default NewBlog