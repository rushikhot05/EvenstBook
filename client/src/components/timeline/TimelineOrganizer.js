import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import Navbar from '../layout/Navbar'

const TimelineOrganizer = () => {
    const [data, setData] = useState([])
    const username = localStorage.getItem('user_name');
    console.log(username)
    useEffect(() => {
        fetch("/api/posts/allpost/" + username, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result=>{
            setData(result.posts)
        })
    }, [])

    return (
        <div className="home" style={{margin:"auto", width:"50%"}}>
            <Navbar />
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id} style={{paddingLeft: "50px"}}>
                            <div className="row">
                                <b style={{maxWidth: "750px"}}>
                                    {item.title}
                                </b>
                                <p style={{maxWidth: "750px"}}>
                                    {item.caption}
                                </p>
                                <div className="card-image">
                                    <img src={item.photo} style={{maxWidth: "500px"}}/>
                                </div>
                                <a href={item.event_url} target="_blank">
                                <button 
                                    className="btn"
                                    style={{backgroundColor:"DodgerBlue",
                                            border: "None",
                                            color: "white",
                                            width:"500px",
                                            fontSize:"12px"}}
                                    ><i className="fa info-circle"></i>Interested? Click to know more!</button>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TimelineOrganizer;