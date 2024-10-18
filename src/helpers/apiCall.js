import axios from "axios"

export const getPosts = async () => (await axios.get("https://my-json-server.typicode.com/msoler95/my-json-server-db-test/posts")).data
export const getPost = async (id) => (await axios.get(`https://my-json-server.typicode.com/msoler95/my-json-server-db-test/posts/${id}`)).data