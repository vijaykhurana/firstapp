import React, { useEffect, useState } from 'react'
import axios from 'axios'
const GetPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1"
  const [post,setPost] = useState({})
//   useEffect(()=> {
//         axios.get(url).then((response)=> {
//             setPost(response.data)
//             console.log(response.data)
//             console.log(post)
//             console.log(post.title)
//         })
//     },[]);
    useEffect(()=> {
        async function getPost() {
            const response = await axios.get(url)
            setPost(response.data)
        }
        getPost()
    }, [])
    return (
    <div>
        <h1>Post Received from jsonplaceholder</h1>
        Title: {post.title}
        <p> Body: {post.body}</p>
    </div>
  )
}
export default GetPost
