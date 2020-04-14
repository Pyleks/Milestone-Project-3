const username = document.getElementById('username');
const email = document.getElementById('email');
const emailLabel = document.getElementById('email-label');
const password = document.getElementById('password');
const userLabel = document.getElementById('userLabel');
const passwordLabel = document.getElementById('passwordLabel');
const confirmPassword = document.getElementById("confirm-password");
const confirmLabel = document.getElementById("confirm-password-label");

$(document).ready(function() {
    ($("form").submit(function (e) {
        let myUsername = $("#username").val();
        let myPassword = $("#password").val();
        let myEmail = $("#email").val();
        let myConfirm = $("#confirm-password").val();
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (myUsername.trim().length === 0 || myUsername.trim().length < 3) {
            console.log(myUsername.trim().length);
            userLabel.innerText = "Username is Empty or Too Short";
            userLabel.style.color = "red";
            e.preventDefault()

        }if(myUsername.trim().length > 12) {
            console.log(username);
            userLabel.innerText = "Username Max 12 Characters";
            userLabel.style.color = "red";
            e.preventDefault()

        }if(regEx.test(String(myEmail).toLowerCase()) !== true) {
            emailLabel.innerText = "Please enter a valid email address";
            emailLabel.style.color = "red";
                e.preventDefault()


        }if(myPassword.trim().length === 0 || myPassword.trim().length < 8) {
            console.log(username);
            passwordLabel.innerText = "Password is too short, Minimum 8 characters";
            passwordLabel.style.color = "red";
            e.preventDefault()

        }if(myPassword !== myConfirm) {
            console.log(username);
            confirmLabel.innerText = "Please make sure password matches";
            confirmLabel.style.color = "red";
            e.preventDefault()



        } else {
            $('#formOverview').attr('action', '/register');
        }

    }));
});

