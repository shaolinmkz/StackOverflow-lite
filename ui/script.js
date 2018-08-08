const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const pword = document.getElementById("pword");
const repword = document.getElementById("repword");
const disp = document.getElementById("display");








const validate = () => {
    const alphaLow = "abcdefghijklmnopqrstuvwxyz";
    const alphaCaps = alphaLow.toUpperCase();
    const num = "0123456789";
    const symbols = "!@#$%^&*()_+-\"<>?/.,{}][~\\=;':";
    let i, j, testSum;

    if (fname.value === ""){
        disp.innerHTML = "Please enter a firstname";
        return false;
    } else if (lname.value === "") {
        disp.innerHTML = "Please enter a lastname";
        return false;
    } else if (uname.value === "") {
        disp.innerHTML = "Please enter a username";
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
    }

    const testAlphaLow = () => {
        for (i = 0; i < (password.value).length; i++) {
            for (j = 0; j < (alphaLow.length); j++) {
                if ((password.value).charAt(i) === alphaLow.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }


    const testAlphaCaps = () => {
        for (i = 0; i < (password.value).length; i++) {
            for (j = 0; j < (alphaCaps.length); j++) {
                if ((password.value).charAt(i) === alphaCaps.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }

    const testNum = () => {
        for (i = 0; i < (password.value).length; i++) {
            for (j = 0; j < (num.length); j++) {
                if ((password.value).charAt(i) === num.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }

    const testSymbols = () => {
        for (i = 0; i < (password.value).length; i++) {
            for (j = 0; j < (symbols.length); j++) {
                if ((password.value).charAt(i) === symbols.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }

    testSum = testAlphaLow() + testAlphaCaps() + testNum() + testSymbols();

    if (testSum < 50) {
        display.style.color = "red";
    } else if (testSum >= 50 && testSum < 75) {
        display.style.color = "yellow";
    } else if (testSum === 75) {
        display.style.color = "rgb(148, 216, 47)";
    } else {
        display.style.color = "green";
    }
    return display.innerHTML = `Password Strength is ${testSum}%`;
}

check.onclick = function () {
    validate();
}