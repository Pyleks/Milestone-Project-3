const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const userLabel = document.getElementById('userLabel');
const form = document.getElementById('form');

$(document).ready(function() {
    ($("form").submit(function (e) {
        if (username.value === '' || username.value == null) {
            userLabel.classList.add("fas", "fa-times");
            $('#formOverview').attr('action', '/register');

        } else if(username.value.length < 3 || username.value.length > 12) {
            userLabel.classList.add("fas", "fa-times");
            $(".user-feedback").css("color", "red");
            e.preventDefault()
        }
    }));
});

