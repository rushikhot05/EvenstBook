const validator= require('validator');
const isEmpty = require('is-empty');

module.exports= function  validateProfileInput(data){
    let errors={ };

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.firstName= !isEmpty(data.firstName) ? data.firstName: "";
    data.lastName= !isEmpty(data.lastName) ? data.lastName: "";
    data.dob= !isEmpty(data.dob) ? data.dob: "";
    data.collageName = !isEmpty(data.collageName) ? data.collageName : "";
    data.gradYear = !isEmpty(data.gradYear) ? data.gradYear : "";
    data.gender = !isEmpty(data.gender) ? data.gender : "";
    data.mobileNo = !isEmpty(data.mobileNo) ? data.mobileNo : "";
    data.interest1 = !isEmpty(data.interest1) ? data.interest1 : "";
    data.interest2 = !isEmpty(data.interest2) ? data.interest2 : "";
    data.interest3 = !isEmpty(data.interest3) ? data.interest3 : "";

    if (validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
      }
    
      if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
      } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
      }
    
      if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
      }
    
    if(validator.isEmpty(data.firstName)){
        errors.FirstName= "First Name is required"
    }
    if(validator.isEmpty(data.lastName)){
        errors.LastName= "Last Name is required"
    }
    if(validator.isEmpty(data.dob)){
        errors.DOB= "DOB is required"
    }
    if(validator.isEmpty(data.collageName)){
        errors.CollageName= "Collage Name is required"
    }
    if(validator.isEmpty(data.gradYear)){
        errors.PassingYear= "Passing year is required"
    }
    if(validator.isEmpty(data.gender)){
        errors.Gender= "Gender is required"
    }
    if(validator.isEmpty(data.mobileNo)){
        errors.MobNo= "Mobile No is required"
    }
     if(validator.isEmpty(data.interests)){
         errors.interests= "Interests are required"
     }
  return{
      errors,
      isValid: isEmpty(errors)
  };

};