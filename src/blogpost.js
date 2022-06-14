import React, { useState } from 'react';
import './blogpost.css';

const Blog =()=>{
    const [name, setName] = useState("");
    const [display,setDisplay] = useState("");
    const [ blog, setBlog] = useState([]);
    const submit=()=>{
        let prevblog = [...blog]
        prevblog.push({name:name , body : display});
        setBlog(prevblog);
        setName("");
        setDisplay("");
        console.log(prevblog);
    }
    return(
        <div className='container'>
            <div className='post'>
                <input className='first' type="text" placeholder="Name..."
                value={name} onChange={(e)=>setName(e.target.value)}/>
                
                <input className='description' type="text" placeholder="Write your comment..."
                 value={display} onChange={(e)=>setDisplay(e.target.value)}/>

                <button onClick={submit} className='add'>Submit</button>
            </div>
            <div className='display'>
                <div className='eachblog'>
                    {blog.map((item)=>{return(<div>
                        <p>{item.name}</p>
                        <p>{item.body}</p>
                </div>)})} 
                    
                </div>
            </div>
        </div>
    )
}

export default Blog;