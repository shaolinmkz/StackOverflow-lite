const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const pword = document.getElementById("pword");
const repword = document.getElementById("repword");
const disp = document.getElementById("disp-error-message");
const signup = document.getElementById("signup");



//----SignUp form input validation-----
const signupValidation = () => {
    if (fname.value === ""){
        disp.innerHTML = "Please enter a firstname";
        return false;
    } else if (lname.value === "") {
        disp.innerHTML = "Please enter a lastname";
        return false;
    } else if (uname.value === "") {
        disp.innerHTML = "Please enter a username";
        return false;
    } else if (email.value === "") {
        disp.innerHTML = "Please enter a valid email";
        return false;
    } else if ((pword.value === "") || (repword.value === "")) {
        disp.innerHTML = "Please enter a password";
        return false;
    } else if ((pword.value).length < 6) {
        disp.innerHTML = "Minimum password length is 6";
        return false;
    } else if ((pword.value).length > 20) {
        disp.innerHTML = "Maximum password length is 20";
        return false;
    } else if (pword.value !== repword.value) {
        disp.innerHTML = "Passwords didn't match";
        return false;
    } else {
        return window.location.assign("./index.html");
    }
};

const login1 = () => {
    signupValidation();
};

signup.addEventListener("click", login1);