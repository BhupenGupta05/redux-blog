const baseUrl = 'http://localhost:3001/blogs'
import axios from "axios"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (blog) => {
  const {title, author, url} = blog
  const object = { title, author, url, likes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (id, existingBlog) => {
  const response = await axios.put(`${baseUrl}/${id}`, existingBlog)
  return response.data
}

const remove = async(id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export default {
  getAll,
  createNew,
  update,
  remove
}