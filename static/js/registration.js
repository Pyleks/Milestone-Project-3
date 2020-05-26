// Script for making sure registration process works correctly.

$(document).ready(function() {
    // Avoid Script from running unless correct ID is found
    let recipeLoad = document.getElementById("registration-form");
    if(recipeLoad) {
        ($("form").submit(function (e) {
            // Gathering all variables from the input form
            let myUsername = $("#username").val();
            let myPassword = $("#password").val();
            let myEmail = $("#email").val();
            let myConfirm = $("#confirm-password").val();
            const userLabel = document.getElementById('userLabel');
            const emailLabel = document.getElementById('emailLabel');
            const passwordLabel = document.getElementById('passwordLabel');
            const confirmLabel = document.getElementById("confirm-password-label");
            const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            // Check if the user name is less then 3 or empty string
            if (myUsername.trim().length === 0 || myUsername.trim().length < 3) {
                console.log(myUsername.trim().length);
                userLabel.innerText = "Username is Empty or Too Short";
                userLabel.style.color = "red";
                e.preventDefault();

                // Check if the user name is longer then 3
            }
            if (myUsername.trim().length > 3) {
                console.log(myUsername.trim().length);
                userLabel.innerText = "Username Correct";
                userLabel.style.color = "green";

                // Check if the username is longer then 12
            }
            if (myUsername.trim().length > 15) {
                userLabel.innerText = "Username Max 15 Characters";
                userLabel.style.color = "red";
                e.preventDefault();

                // Check if the username is longer then 3
            }
            if (myUsername.trim().length <= 15 && myUsername.trim().length >= 3) {
                userLabel.innerText = "Username Correct";
                userLabel.style.color = "green";

                // Check if the email uses @
            }
            if (regEx.test(String(myEmail).toLowerCase()) !== true) {
                emailLabel.innerText = "Please enter a valid email address";
                emailLabel.style.color = "red";
                e.preventDefault();

                // Check if email is correct
            }
            if (regEx.test(String(myEmail).toLowerCase()) === true) {
                emailLabel.innerText = "Email Correct";
                emailLabel.style.color = "green";

                // Check if password is less then 8 or just whitespace
            }
            if (myPassword.trim().length === 0 || myPassword.trim().length < 8) {
                passwordLabel.innerText = "Password is too short, Minimum 8 characters";
                passwordLabel.style.color = "red";
                e.preventDefault();

                // Check if password is longer then 8
            }
            if (myPassword.trim().length >= 8) {
                passwordLabel.innerText = "Password correct";
                passwordLabel.style.color = "green";

                // Check if confirm password = password
            }
            if (myPassword !== myConfirm) {
                confirmLabel.innerText = "Please make sure password matches";
                confirmLabel.style.color = "red";
                e.preventDefault();

                // Check if my password = confirm password and if it's full of whitespaces.
            }
            if (myPassword === myConfirm && myPassword.trim().length >= 8) {
                confirmLabel.innerText = "Password Matches";
                confirmLabel.style.color = "green";

                // Same as above just if it's less then 8 characters
            }
            if (myPassword === myConfirm && myConfirm.trim().length < 8) {
                confirmLabel.innerText = "Password Matches but too short";
                confirmLabel.style.color = "red";
                e.preventDefault();


            } else {
                // if everything passes, it will apply the value /register.
                $('#formOverview').attr('action', '/register');
            }

        }));
    }});



