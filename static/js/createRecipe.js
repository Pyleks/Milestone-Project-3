$(document).ready(function() {
    ($("#submitForm").click(function (e) {
        let pastryUrl = $("#imageUrl").val();
        let portions = $("#recipe_portions").val();
        let pastryName = $("#recipe_name").val();
        let calloutText = $("#recipe_callout").val();
        let Ingredients = $("#recipe_ingredients").val();
        let howTo = $("#recipe_howTo").val();
        const urlLabel = document.getElementById('urlLabel');
        const pastryNameLabel = document.getElementById('pastryNameLabel');
        const calloutLabel = document.getElementById('calloutLabel');
        const portionLabel = document.getElementById('portionLabel');
        const ingredientsLabel = document.getElementById("ingredientsLabel");
        const howToLabel = document.getElementById("howToLabel");

        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

        if(!!pattern.test(pastryUrl) !== true) {
            urlLabel.innerText = "Please add a valid URL";
            urlLabel.style.color = "red";
            e.preventDefault()

        }if(!!pattern.test(pastryUrl) === true) {
            urlLabel.innerText = "URL Valid";
            urlLabel.style.color = "green";


        }if(pastryName.trim().length === 0 || pastryName.trim().length < 3) {
            pastryNameLabel.innerText = "Pastry name empty or too short";
            pastryNameLabel.style.color = "red";
            e.preventDefault()

        }if(pastryName.trim().length >= 3) {
            pastryNameLabel.innerText = "Pastry Name Correct";
            pastryNameLabel.style.color = "green";


        }if(calloutText.trim().length === 0 || calloutText.trim().length < 5) {
            calloutLabel.innerText = "Callout Text too short";
            calloutLabel.style.color = "red";
            e.preventDefault()

        }if(calloutText.trim().length > 5) {
            calloutLabel.innerText = "Callout Text Correct";
            calloutLabel.style.color = "green";


        }if(isNaN(portions) === true || portions.trim().length === 0) {
            portionLabel.innerText = "Please use numbers only";
            portionLabel.style.color = "red";
            e.preventDefault()

        }if(isNaN(portions) === false && portions.trim().length >= 1) {
            portionLabel.innerText = "Number Correct";
            portionLabel.style.color = "green";



        }if(Ingredients.trim().length === 0 || Ingredients.trim().length < 10) {
            ingredientsLabel.innerText = "Ingredients too short";
            ingredientsLabel.style.color = "red";
            e.preventDefault()

        }if(Ingredients.trim().length >= 10) {
            ingredientsLabel.innerText = "Ingredients Correct";
            ingredientsLabel.style.color = "green";


        }if(howTo.trim().length === 0 || howTo.trim().length < 15) {
            howToLabel.innerText = "How To description is too short";
            howToLabel.style.color = "red";
            e.preventDefault()

        }if(howTo.trim().length >= 15) {
            howToLabel.innerText = "How To Correct";
            howToLabel.style.color = "green";

        }

    }));
});