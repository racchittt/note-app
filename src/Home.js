import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website' , body: 'This is my new blog', author: 'mario', id: 1},
        {title: 'Learing React' , body: 'How i am learning react', author: 'luigi', id: 2},
        {title: 'Lets see how things work out' , body: 'Maybe i am getting intersted in this blog', author: 'Unreact', id: 3},
    ]);
    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title ="All blogs" />
        </div>
     );
}
 
export default Home;