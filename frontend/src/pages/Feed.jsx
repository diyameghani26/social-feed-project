import React , {useState, useEffect} from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setposts] = useState([])

    useEffect(()=>{
        
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            
            setposts(res.data.posts)
        })

    },[])

  return (
    <section className=' flex flex-col items-center justify-start gap-20px h-full w-full bg-blue-50 p-6'>
       {
        posts.length > 0 ?(
            posts.map((post) => 
            (
                <div key={post._id} className='bg-white p-5  w-100 mb-5 shadow-sm' >
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))
        ) :(
            <h1>No posts available</h1>
        )
       }
    </section>
  )
}

export default Feed

