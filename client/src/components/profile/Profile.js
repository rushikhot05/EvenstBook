import React, { Component, useState } from "react";
// import { Link, withRouter } from "react-router-dom";
// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
// import MultiSelect from "react-multi-select-component";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userProfile,getProfile } from "../../actions/authActions";



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var options={}
//     var instances = M.FormSelect.init(elems, options);
//     // var instances = M.FormSelect.getInstance(elem)
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.chips');
//     var options = {}
//     var instances = M.Chips.init(elems, options);
//   });

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
            interest1: "",
            interest2: "",
            interest3: "",         
            // value: '',
            errors: {}
        }; 
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value});
    };

    // onEnter = e => {
    //     if(e.charCode !== 13) return;
    //     this.interestsChange();
    // };

    // interestsChange = e => {
    //     const { value } = this.state;
    //     if(!!value.trim()) return; 
    //     this.setState((prevState) => ({
    //         interests: [...prevState.interests, value],
    //         value: ''
    //     }));
    // };

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
            interest1: this.state.interest1,
            interest2: this.state.interest2,
            interest3: this.state.interest3
        };
        this.props.userProfile(newProfile, this.props.history);
        this.props.history.push("/dashboard");
        console.log(newProfile);
    };
    
    componentDidMount () {
        //If logged in and user navigates to register page, should redirect them to 
        var em= localStorage.getItem('email');
        fetch("http://localhost:5000/api/users/profile/"+em)
        .then(res => res.json())
        .then(data=>{
            localStorage.setItem('user_name',data.data.userdata.name)
           this.setState({
            name: data.data.userdata.name,
            email: data.data.userdata.email,
            password: data.data.userdata.password,
            firstName: data.data.userdata.firstName,
            lastName: data.data.userdata.lastName,
            collegeName: data.data.userdata.collegeName,
            gradYear: data.data.userdata.gradYear,
            gender: data.data.userdata.gender,
            dob: data.data.userdata.dob,
            mobileNo: data.data.userdata.mobileNo,
            profilePic: data.data.userdata.profilePic,
            interest1: data.data.userdata.interest1,
            interest2: data.data.userdata.interest2,
            interest3: data.data.userdata.interest3,         
            errors: {}
           })
       })
    }
    

    render() {
        const { errors } = this.state;
        var user= localStorage.getItem('user_name');
        console.log(user)
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
                        <input
                                onChange={this.onChange}
                                value={this.state.gradYear}
                                error={this.state.gradYear} 
                                id="gradYear"
                                type="text"
                            />
                            <label htmlFor="gradYear">Graduation Year</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input
                                onChange={this.onChange}
                                value={this.state.dob}
                                error={this.state.dob}
                                id="dob"
                                type="text"
                            />
                            <label htmlFor="dob">Date of birth (dd-mm-yyyy)</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input
                                onChange={this.onChange}
                                value={this.state.gender}
                                error={this.state.gender} 
                                id="gender"
                                type="text"
                            />
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
                        <div className="input-field col s4">
                            <input 
                                onChange={this.onChange}
                                value={this.state.interest1}
                                error={this.state.interest1}
                                id="interest1"
                                type="text"
                                // onKeyPress={this.onEnter}
                            />
                            {/* <div className="chips">
                                <input 
                                    onChange={this.interestsChange}
                                    value={this.value}
                                    error={this.state.interests}
                                    id="interests"
                                    type="text"
                                    onKeyPress={this.onEnter}
                                />
                            </div> */}
                            {/* <select onChange={this.onChange} value={this.state.interests} error={this.state.interests} id="interests" type="array" multiple>
                                <option value="" disabled selected>Choose your interests</option>
                                <option>Machine Learning</option>
                                <option>Blockchain</option>
                                <option>Full-Stack</option>
                            </select> */}
                            <label htmlFor="interest1">Interest 1:</label>
                        </div>
                        <div className="input-field col s4">
                            <input 
                                onChange={this.onChange}
                                value={this.state.interest2}
                                error={this.state.interest2}
                                id="interest2"
                                type="text"
                            />
                            <label htmlFor="interest2">Interest 2:</label>
                        </div>
                        <div className="input-field col s4">
                            <input 
                                onChange={this.onChange}
                                value={this.state.interest3}
                                error={this.state.interest3}
                                id="interest3"
                                type="text"
                            />
                            <label htmlFor="interest3">Interest 3:</label>
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