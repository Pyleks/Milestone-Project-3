$(document).ready(function() {
    ($("#submitForm").click(function (e) {
        let pastryUrl = $("#pastry_url").val();
        let portions = $("#pastry_portions").val();
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

        if(!!pattern.test(pastryUrl) !== true) {
            e.preventDefault()

        }if(isNaN(portions) === true) {
            e.preventDefault()
        }

    }));
});