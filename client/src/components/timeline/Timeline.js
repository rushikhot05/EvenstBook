import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"

const Timeline = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/api/posts/allpost", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result=>{
            // console.log(result.posts)
            setData(result.posts)
        })
    }, [])

    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id}>
                            <h5>
                                {item.name}
                            </h5>
                            <h6>
                                {item.title}
                            </h6>
                            <p>
                                {item.body}
                            </p>
                            <div className="card-image">
                                <img src={item.photo}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Timeline;