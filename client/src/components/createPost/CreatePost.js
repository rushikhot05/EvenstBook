import React, { useState } from 'react';
import M from "materialize-css";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
    const [subject, setSubject] = useState("")
    const [caption, setCaption] = useState("")
    const [photo, setPhoto] = useState("")
    const [url, setUrl] = useState("")
    
    const username = localStorage.getItem("username", data.data.userdata.name)
    console.log(username)
    const postDetails = () => {
        const data = new FormData()
        data.append("file", photo)
        data.append("upload_preset", "eventsbook")
        data.append("cloud_name", "eventsbook")
        fetch("https://api.cloudinary.com/v1_1/eventsbook/photo/upload",{ 
        method: "post",
        body: data
        })
        .then(res => res.json())
        .then(data => {
            setUrl(data.url)
        })
        .catch(err => {
            console.log(err)
        })

        
    }

    return (
        <div className="card input-field"
        style={{
            margin:"30px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center"
        }}>
            <input 
                type="text"
                placeholder="subject"
                value={subject}
                onChange= { (e) => setSubject(e.target.value)}
            />
            <input 
                type="text"
                placeholder="caption"
                value={caption}
                onChange= { (e) => setCaption(e.target.value)}
            />

            <div className= "file-field input-field">
                <div className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                    <span>Upload Photo</span>
                    <input
                        type="file"
                        onChange={(e) => setPhoto(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick= {() => postDetails()}>
                Submit Post
            </button>
        </div>
    )
}

export default CreatePost;