import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar" style={{backgroundColor:"eea29a"}}>
                <nav className="z-depth-0">
                    <div className="nav-wrapper">
                        <Link
                            to="/timeline"
                            style={{
                                fontFamily: "monospace"
                            }}
                            className="brand-logo">
                            <i className="material-icons">event</i>
                            EventsBook        
                        </Link>
                        <ul className="right">
                            <li>
                                <Link
                                    to="/profile"
                                    style={{
                                        fontFamily: "monospace"
                                    }}
                                    className="right hide-on-med-and-down">
                                    {/* <i className="material-icons">account_box</i> */}
                                    Profile        
                                </Link>        
                            </li>
                            <li>
                                <Link
                                    to="/createPost"
                                    style={{
                                        fontFamily: "monospace"
                                    }}
                                    className="right hide-on-med-and-down">
                                    {/* <i className="material-icons">account_box</i> */}
                                    Post an Event        
                                </Link>        
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    style={{
                                        fontFamily: "monospace"
                                    }}
                                    className="right hide-on-med-and-down">
                                    {/* <i className="material-icons">account_box</i> */}
                                    Logout        
                                </Link>        
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;