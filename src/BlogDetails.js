import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";

const BlogDetails = () => {
    const {id} =useParams(); 
    const { data, isLoading, error} = UseFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-details">
            {error && <div> {error} </div>}
            {isLoading && <div> Loading... </div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p> Written by {data.author}</p>
                    <div>{data.body}</div>
                </article>
            ) }
        </div>
    );
}
 
export default BlogDetails;