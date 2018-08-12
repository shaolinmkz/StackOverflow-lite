const siEmail = document.getElementById("siEmail");
const siPword = document.getElementById("siPword");
const siDisp = document.getElementById("disp-error");
const signin = document.getElementById("signin");

//----SignIn form input validation-----
const signinValidation = () => {
    siDisp.style.fontFamily = "cursive";
    if (siEmail.value === "") {
        siDisp.innerHTML = "Invalid Email";
        return false;
    } else if (siPword.value === "") {
        siDisp.innerHTML = "Invalid Password";
        return false;
    } else if ((siPword.value).length < 6) {
        siDisp.innerHTML = "Minimum length is 6 characters";
        return false;
    } else if ((siPword.value).length > 20) {
        siDisp.innerHTML = "Maximum length is 20 characters";
        return false;
    } else {
        return window.location.assign("./index.html");
    }
}

const login2 = () => {
    signinValidation();
};

signin.addEventListener("click", login2);