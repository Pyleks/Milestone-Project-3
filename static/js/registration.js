const username = document.getElementById('username');
const content = document.createTextNode(" has too few characters");
const empty = document.createTextNode(" empty username");
const email = document.getElementById('email');
const password = document.getElementById('password');
const userLabel = document.getElementById('userLabel');
const form = document.getElementById('form');

$(document).ready(function() {
    ($("form").submit(function (e) {
        const empty = document.createTextNode(" Is empty");
        let myUsername = $("#username").val();
        if (myUsername.trim().length === 0) {
            console.log(myUsername.trim().length);
            userLabel.appendChild(empty);
            e.preventDefault()

        }if(myUsername.length < 3 || myUsername.length > 12) {
            const usernamelenght = document.createTextNode(" Username Min 3 and Max 12 Characters");
            console.log(username);
            userLabel.appendChild(usernamelenght);
            e.preventDefault()

        } else {
            $('#formOverview').attr('action', '/register');
        }

    }));
});

