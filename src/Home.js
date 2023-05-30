import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website' , body: 'This is my new blog', author: 'mario', id: 1},
        {title: 'Learing React' , body: 'How i am learning react', author: 'luigi', id: 2},
        {title: 'Lets see how things work out' , body: 'Maybe i am getting intersted in this blog', author: 'Unreact'},
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}> 
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;