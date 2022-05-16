import React, { useState } from 'react';
import './blogpost.css';

const Blog =()=>{

    const [data, setData] = useState("");
    return(
        <div className='container'>
            <div className='post'>
                <input className='first' type="text" placeholder="Name..."
                value={data}
                
                <input className='description' type="text" placeholder="Write your comment..."/>
                <button className='add'>Submit</button>
            </div>
            <div className='display'>
                <div className='eachblog'>
                    <p></p>
                    <button className='dlt'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Blog;