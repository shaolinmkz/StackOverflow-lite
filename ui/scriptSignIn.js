const siEmail = document.getElementById("siEmail");
const siPword = document.getElementById("siPword");
const siDisp = document.getElementById("disp-error");
const signin = document.getElementById("signin");

//----SignIn form input validation-----
const signinValidation = () => {
    if (siEmail.value === "") {
        siDisp.innerHTML = "Invalid Username";
        return false;
    } else if (siPword.value === "") {
        siDisp.innerHTML = "Invalid Password";
        return false;
    } else {
        return window.location.assign("./index.html");
    }
}

const login2 = () => {
    signinValidation();
};

signin.addEventListener("click", login2);