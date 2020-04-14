const username = document.getElementById('username');
const content = document.createTextNode(" has too few characters");
const empty = document.createTextNode(" empty username");
const email = document.getElementById('email');
const password = document.getElementById('password');
const userLabel = document.getElementById('userLabel');
const passwordLabel = document.getElementById('passwordLabel');
const confirmPassword = document.getElementById("confirm-password");
const form = document.getElementById('form');

$(document).ready(function() {
    ($("form").submit(function (e) {
        let myUsername = $("#username").val();
        let mypassword = $("#password").val();
        let myConfirm = $("#confirm-password").val();
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

        }if(mypassword.trim().length === 0 || mypassword.trim().length < 8) {
            console.log(username);
            passwordLabel.innerText = "Password too short, Minimum 8 characters";
            passwordLabel.style.color = "red";
            e.preventDefault()

        }if(mypassword !== myConfirm) {
            console.log(username);
            passwordLabel.innerText = "Please make sure confirm password matches";
            passwordLabel.style.color = "red";
            e.preventDefault()



        } else {
            $('#formOverview').attr('action', '/register');
        }

    }));
});

