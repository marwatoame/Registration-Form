function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var password = document.Form.password.value;
    var region = document.Form.region.value;
    var gender = document.Form.gender.value;
    var username = document.Form.username.value;
    var birthday = document.Form.birthday.value;

    var nameError = emailError = passwordError = regionError = genderError = usernameError = birthdayError = true;

    if (name == "") {
        printError("nameError", "Please enter your name");
        var elem = document.getElementById("name");
        elem.classList.add("input-error");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameError", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.remove("input-error");
        } else {
            printError("nameError", "");
            nameError = false;
            var elem = document.getElementById("name");
        }
    }

    if (birthday == "") {
        printError("birthdayError", "Please enter your birthday");
        var elem = document.getElementById("birthday");
        elem.classList.add("input-error");
    }
    /* else {
        var regex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if(regex.test(email) === false) {
            printError("birthdayError", "Please enter a valid birthday");
            var elem = document.getElementById("birthday");
            elem.classList.add("input-2");
            elem.classList.remove("input-1"); 
        } */
    else {
        printError("birthdayError", "");
        birthdayError = false;
        var elem = document.getElementById("birthday");
    }

    if (email == "") {
        printError("emailError", "Please enter your email address");
        var elem = document.getElementById("email");
        elem.classList.add("input-error");
    }
    else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailError", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.remove("input-error");
        }
        else {
            printError("emailError", "");
            emailError = false;
            var elem = document.getElementById("email");
        }
    }

    if (username == "") {
        printError("usernameError", "Please enter your username");
        var elem = document.getElementById("username");
        elem.classList.add("input-error");
    }
    else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(username) === false) {
            printError("usernameError", "Please enter a valid username");
            var elem = document.getElementById("username");
            elem.classList.remove("input-error");
        }
        else {
            printError("usernameError", "");
            usernameError = false;
            var elem = document.getElementById("username");
        }
    }

    if (password == "") {
        printError("passwordError", "Please enter your password");
        var elem = document.getElementById("password");
        elem.classList.add("input-error");
    }
    else {
        var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (regex.test(password) === false) {
            printError("passwordError", "Please enter a valid password");
            var elem = document.getElementById("password");
            elem.classList.remove("input-error");
        }
        else {
            printError("passwordError", "");
            passwordError = false;
            var elem = document.getElementById("password");
        }
    }

    if (region == "Select") {
        printError("regionError", "Please select your region");
        var elem = document.getElementById("region");
        elem.classList.add("input-error");
    }
    else {
        printError("regionError", "");
        regionError = false;
        var elem = document.getElementById("region");
        elem.classList.remove("input-error");
    }

    if (gender == "") {
        printError("genderError", "Please select your gender");
        var elem = document.getElementById("gender");
        elem.classList.add("input-error");
    }
    else {
        printError("genderError", "");
        genderError = false;
        var elem = document.getElementById("gender");
        elem.classList.remove("input-error");
    }

    if ((nameError || emailError || passwordError || regionError || genderError || usernameError || birthdayError) == true) {
        return false;
    }
};