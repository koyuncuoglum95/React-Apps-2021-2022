import React, { useEffect, useState } from 'react'

const Async = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            setPost(data);
        });
    }, []);
  return (
    <div>
        <ul>
            {post.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Async