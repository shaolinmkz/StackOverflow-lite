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
    disp.style.color = "rgb(255, 45, 45)";
    disp.style.fontFamily = "cursive";
    
    if (uname.value === ""){
        disp.innerHTML = "Please enter a username";
        return false;
    } else if (fname.value === "") {
        disp.innerHTML = "Please enter a firstname";
        return false;
    } else if (lname.value === "") {
        disp.innerHTML = "Please enter a lastname";
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


const testPasswordStrength = () => {
    const alphaLow = "abcdefghijklmnopqrstuvwxyz";
    const alphaCaps = alphaLow.toUpperCase();
    const num = "0123456789";
    const symbols = "!@#$%^&*()_+-={}]['\"\\;:,./<?>~";
    let i, j, testSum;

    if (pword.value === "") {
        return disp.innerHTML = "";
    } 

    const testAlphaLow = () => {
        for (i = 0; i < (pword.value).length; i++) {
            for (j = 0; j < (alphaLow.length); j++) {
                if ((pword.value).charAt(i) === alphaLow.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }


    const testAlphaCaps = () => {
        for (i = 0; i < (pword.value).length; i++) {
            for (j = 0; j < (alphaCaps.length); j++) {
                if ((pword.value).charAt(i) === alphaCaps.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }

    const testNum = () => {
        for (i = 0; i < (pword.value).length; i++) {
            for (j = 0; j < (num.length); j++) {
                if ((pword.value).charAt(i) === num.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }

    const testSymbols = () => {
        for (i = 0; i < (pword.value).length; i++) {
            for (j = 0; j < (symbols.length); j++) {
                if ((pword.value).charAt(i) === symbols.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }

    testSum = testAlphaLow() + testAlphaCaps() + testNum() + testSymbols();

    if (testSum < 50) {
        disp.style.color = "red";
    } else if (testSum >= 50 && testSum < 75) {
        disp.style.color = "yellow";
    } else if (testSum === 75) {
        disp.style.color = "rgb(148, 216, 47)";
    } else {
        disp.style.color = "green";
    }
    return disp.innerHTML = `Password Strength is ${testSum}%`;
}

pword.oninput = function () {
    testPasswordStrength();
}