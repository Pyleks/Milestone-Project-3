// This JS is for making sure that recipe creation go well, and provide the client with sufficient feedback

$(document).ready(function() {

    CKEDITOR.replace( 'recipe_ingredients', {
        uiColor: '#6499ed',
        customConfig: '/../static/js/config.js'
    });

    CKEDITOR.replace( 'recipe_howTo', {
        uiColor: '#6499ed',
        customConfig: '/../static/js/config.js'
    });


    // All the variables required to handle the operation
    ($("#submitForm").click(function (e) {
        let recipeUrl = $("#imageUrl").val();
        let portions = $("#recipe_portions").val();
        let recipeName = $("#recipe_name").val();
        let calloutText = $("#recipe_callout").val();
        let Ingredients = $("#recipe_ingredients").val();
        let howTo = $("#recipe_howTo").val();
        const urlLabel = document.getElementById('urlLabel');
        const recipeNameLabel = document.getElementById('recipeNameLabel');
        const calloutLabel = document.getElementById('calloutLabel');
        const portionLabel = document.getElementById('portionLabel');
        const ingredientsLabel = document.getElementById("ingredientsLabel");
        const howToLabel = document.getElementById("howToLabel");

            // This one is to make sure the URL string is correct
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

            // Checks if the URL is invalid
        if(!!pattern.test(recipeUrl) !== true) {
            urlLabel.innerText = "Please add a valid URL";
            urlLabel.style.color = "red";
            e.preventDefault();

            // If the URL is valid, it provides valid URL
        }if(!!pattern.test(recipeUrl) === true) {
            urlLabel.innerText = "URL Valid";
            urlLabel.style.color = "green";

            // Check if there is text and not just spaces, and if it's shorter then 3 characters
        }if(recipeName.trim().length === 0 || recipeName.trim().length < 3) {
            recipeNameLabel.innerText = "Recipe name empty or too short";
            recipeNameLabel.style.color = "red";
            e.preventDefault();

            // Check if the recipe name is long enough
        }if(recipeName.trim().length >= 3) {
            recipeNameLabel.innerText = "Recipe Name Correct";
            recipeNameLabel.style.color = "green";

            // Check if call out text is just spaces or less then 5
        }if(calloutText.trim().length === 0 || calloutText.trim().length < 5) {
            calloutLabel.innerText = "Callout Text too short";
            calloutLabel.style.color = "red";
            e.preventDefault();

            // If it's longer then 5 characters
        }if(calloutText.trim().length > 5) {
            calloutLabel.innerText = "Callout Text Correct";
            calloutLabel.style.color = "green";

            // If the portions are not a number or just empty space
        }if(isNaN(portions) === true || portions.trim().length === 0) {
            portionLabel.innerText = "Please use numbers only";
            portionLabel.style.color = "red";
            e.preventDefault();

            // If NaN is false, it passes
        }if(isNaN(portions) === false && portions.trim().length >= 1) {
            portionLabel.innerText = "Number Correct";
            portionLabel.style.color = "green";


        }

    }));
});