import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Blogs() {
 const [blogs, setblogs] = useState([]);

 useEffect(() => {
    const fetchblogs = async () => {
      try {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v4/blogs');
        setblogs(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchblogs();
 }, []);

 return (
    <div>
      <h1>Space Flight Blogs:</h1>
      {blogs.length > 0 ? (
        blogs.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <img src={article.image_url} alt="" />
            <a href={article.url}>Read More</a>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading blogs...</p>
      )}
    </div>
 );
}

export default Blogs;
