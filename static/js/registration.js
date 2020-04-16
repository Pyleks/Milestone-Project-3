$(document).ready(function() {
    ($("form").submit(function (e) {
        let myUsername = $("#username").val();
        let myPassword = $("#password").val();
        let myEmail = $("#email").val();
        let myConfirm = $("#confirm-password").val();
        const userLabel = document.getElementById('userLabel');
        const emailLabel = document.getElementById('emailLabel');
        const passwordLabel = document.getElementById('passwordLabel');
        const confirmLabel = document.getElementById("confirm-password-label");
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (myUsername.trim().length === 0 || myUsername.trim().length < 3) {
            console.log(myUsername.trim().length);
            userLabel.innerText = "Username is Empty or Too Short";
            userLabel.style.color = "red";
            e.preventDefault()

        }if (myUsername.trim().length > 3) {
            console.log(myUsername.trim().length);
            userLabel.innerText = "Username Correct";
            userLabel.style.color = "green";


        }if(myUsername.trim().length > 12) {
            // console.log(username);
            userLabel.innerText = "Username Max 12 Characters";
            userLabel.style.color = "red";
            e.preventDefault()

        }if(myUsername.trim().length <= 12 && myUsername.trim().length >= 3 ) {
            // console.log(username);
            userLabel.innerText = "Username Correct";
            userLabel.style.color = "green";


        }if(regEx.test(String(myEmail).toLowerCase()) !== true) {
            emailLabel.innerText = "Please enter a valid email address";
            emailLabel.style.color = "red";
                e.preventDefault()

        }if(regEx.test(String(myEmail).toLowerCase()) === true) {
            emailLabel.innerText = "Email Correct";
            emailLabel.style.color = "green";



        }if(myPassword.trim().length === 0 || myPassword.trim().length < 8) {
            // console.log(username);
            passwordLabel.innerText = "Password is too short, Minimum 8 characters";
            passwordLabel.style.color = "red";
            e.preventDefault()

        }if(myPassword.trim().length >= 8) {
            // console.log(username);
            passwordLabel.innerText = "Password correct";
            passwordLabel.style.color = "green";


        }if(myPassword !== myConfirm) {
            // console.log(username);
            confirmLabel.innerText = "Please make sure password matches";
            confirmLabel.style.color = "red";
            e.preventDefault()



        }if(myPassword === myConfirm && myPassword.trim().length >= 8) {
            // console.log(username);
            confirmLabel.innerText = "Password Matches";
            confirmLabel.style.color = "green";

        }if(myPassword === myConfirm && myConfirm.trim().length < 8) {
            // console.log(username);
            confirmLabel.innerText = "Password Matches but too short";
            confirmLabel.style.color = "red";
            e.preventDefault()



        } else {
            $('#formOverview').attr('action', '/register');
        }

    }));
});

