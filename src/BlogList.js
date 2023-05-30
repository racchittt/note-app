// This way is a little lengthy 
// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;
    // console.log(props,blogs);
//This is a simpler way to destructure the props which are being passed in the function itself.

const BlogList = ({blogs, title}) => {
    return ( 
       <div className="blog-list">
        <h2> {title} </h2>
        {blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}> 
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                </div>
            ))}
       </div> 
     );
}
 
export default BlogList;