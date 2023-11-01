import {useState, useEffect} from 'react'
import BlogList from './BlogList';
import UseFetch from './UseFetch';

const Home = () => {
    const { data, isLoading, error} = UseFetch('http://localhost:8000/blogs')
    return ( 
        <div className = "home">
            {error && <div> {error} </div>}
            {isLoading && <div> Loading... </div>}
            {data && <BlogList blogs = {data} title = "All Blogs!"/> }
            {data && <BlogList blogs = {data.filter((blog) => blog.author === 'ekhfa')} title = " Blogs by Ekhfa"/>}
        </div>
     );
}
 
export default Home;