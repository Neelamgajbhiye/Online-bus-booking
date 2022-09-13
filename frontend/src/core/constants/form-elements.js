export const FORM_LABELS={
    NAME:'Name',
    EMAIL:'Email',
    PASSWORD:'Password',
    CONFIRM_PASSWORD:'Confirm Password',
    MOBILE_NO:'Mobile No',
    DATE_OF_BIRTH:'DOB',
    SIGN_IN:'Sign In',
    SIGN_UP:'Sign Up',
    MALE:'Male',
    FEMALE:'Female',
    AlREDY_REGISTER:'Already registered?',
    NEED_AN_ACCOUNT:'Need an Account?'
}
    
export const FORM_ERROR_MESSAGES={
    NAME_ERROR:'Name should atleast ontain 3 characters',
    EMAIL_ERROR:'Enter a valid email address',
    PASSWORD_ERROR:'Password should contains atleast 8 charaters and \n containing uppercase,lowercase and numbers',
    MOBILE_NO:'Mobile number should contain 10 digits',
    DATE_OF_BIRTH:'User must be 18 years old',
    INVALID_EMAIL:'Invalid Email Address',
 
    NUMBER_VALID:'Number Should be 10 digits',
    CONFIRM_PASSWORD_ERROR:'Must match the first password input field.'

}


export const REGULAR_EXPRESSIONS={
    PHONE_REGEX : /^[0-9]{10}$/,
    EMAIL_REGEX : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD_REGEX: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
}