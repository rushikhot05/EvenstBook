import React, { Component, useState } from "react";
// import { Link, withRouter } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import MultiSelect from "react-multi-select-component";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userProfile } from "../../actions/authActions";

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var options={}
    var instances = M.FormSelect.init(elems, options);
    // var instances = M.FormSelect.getInstance(elem)
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.chips');
    var options = {}
    var instances = M.Chips.init(elems, options);
  });

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            collegeName: "",
            gradYear: "",
            gender: "",
            dob: "",
            mobileNo: "",
            profilePic: "",
            interests: [""],         
            errors: {}
        }; 
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newProfile = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            collegeName: this.state.collegeName,
            gradYear: this.state.gradYear,
            gender: this.state.gender,
            dob: this.state.dob,
            mobileNo: this.state.mobileNo,
            profilePic: this.state.profilePic,
            interests: this.state.interests
        };
        this.props.userProfile(newProfile, this.props.history);
        this.props.history.push("/dashboard");
        console.log(newProfile);
    };

    render() {
        const { errors } = this.state;
        
        return(
            <div className="container">
                <div className="row">
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12 m6">
                            <input
                                onChange={this.onChange}
                                value={this.state.firstName}
                                error={this.state.firstName} 
                                id="firstName" 
                                type="text"
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input
                                onChange={this.onChange}
                                value={this.state.lastName}
                                error={this.state.lastName} 
                                id="lastName"
                                type="text"
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.collegeName}
                                error={this.state.collegeName} 
                                id="collegeName"
                                type="text"
                            />
                            <label htmlFor="collegeName">College Name</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <select onChange={this.onChange} value={this.state.gradYear} id="gradYear" type="text" error={this.state.gradYear}>
                                <option value="" disabled selected defaultValue>Choose your graduation year</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                            </select>
                            <label htmlFor="gradYear">Graduation Year</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input
                                onChange={this.onChange}
                                value={this.state.dob}
                                error={this.state.dob}
                                id="dob"
                                type="text"
                                placeholder="dd-mm-yyyy"
                            />
                            <label htmlFor="dob">Date of birth</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <select onChange={this.onChange} value={this.state.gender} error={this.state.gender} id="gender" type="text">
                                <option value="" disabled selected defaultValue>Choose Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Can't Say</option>
                            </select>
                            <label htmlFor="gender">Gender</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input
                                onChange={this.onChange}
                                value={this.state.mobileNo}
                                error={this.state.mobileNo}
                                id="mobileNo"
                                type="text"
                            />
                            <label htmlFor="mobileNo">Mobile No.</label>
                        </div>
                        <div className="input-field col s12">
                            <div className="chips chips-placeholder">
                                <input 
                                    onChange={this.onChange}
                                    value={this.state.interests}
                                    error={this.state.interests}
                                    id="interests"
                                    type="text"
                                />
                            </div>
                            {/* <select onChange={this.onChange} value={this.state.interests} error={this.state.interests} id="interests" type="array" multiple>
                                <option value="" disabled selected>Choose your interests</option>
                                <option>Machine Learning</option>
                                <option>Blockchain</option>
                                <option>Full-Stack</option>
                            </select> */}
                            <label htmlFor="interests">Interests</label>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                                style={{
                                    width: "250px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type= "submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                Save your profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

Profile.propTypes = {
    userProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect (
    mapStateToProps,
    { userProfile }
)(Profile);