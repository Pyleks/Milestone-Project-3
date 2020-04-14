const username = document.getElementById('username');
const content = document.createTextNode(" has too few characters");
const empty = document.createTextNode(" empty username");
const email = document.getElementById('email');
const password = document.getElementById('password');
const userLabel = document.getElementById('userLabel');
const form = document.getElementById('form');

$(document).ready(function() {
    ($("form").submit(function (e) {
        let myUsername = $("#username").val();
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





        } else {
            $('#formOverview').attr('action', '/register');
        }

    }));
});

