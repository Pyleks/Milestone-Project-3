// This JS is for making sure that recipe creation go well, and provide the client with sufficient feedback

$(document).ready(function() {
    CKEDITOR.replace( 'recipe_ingredients', {
        uiColor: '#9AB8F3',
        customConfig: '/CKeditor-config.js'
    });

    CKEDITOR.replace( 'recipe_howTo', {
        uiColor: '#9AB8F3',
        customConfig: '/CKeditor-config.js'
    });



    // CKEDITOR.replace('recipe_ingredients', {
    //     config.disallowedContent = 'p'
    // });
    //
    //
    // // CKEDITOR.replace('recipe_howTo', {
    // //     config.disallowedContent = 'p'
    // // })



    // All the variables required to handle the operation
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

            // This one is to make sure the URL string is correct
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

            // Checks if the URL is invalid
        if(!!pattern.test(pastryUrl) !== true) {
            urlLabel.innerText = "Please add a valid URL";
            urlLabel.style.color = "red";
            e.preventDefault();

            // If the URL is valid, it provides valid URL
        }if(!!pattern.test(pastryUrl) === true) {
            urlLabel.innerText = "URL Valid";
            urlLabel.style.color = "green";

            // Check if there is text and not just spaces, and if it's shorter then 3 characters
        }if(pastryName.trim().length === 0 || pastryName.trim().length < 3) {
            pastryNameLabel.innerText = "Pastry name empty or too short";
            pastryNameLabel.style.color = "red";
            e.preventDefault();

            // Check if the recipe name is long enough
        }if(pastryName.trim().length >= 3) {
            pastryNameLabel.innerText = "Pastry Name Correct";
            pastryNameLabel.style.color = "green";

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


            // Check if the ingredients have sufficient character, and not just empty space
        // }if(Ingredients.trim().length === 0 || Ingredients.trim().length < 10) {
        //     ingredientsLabel.innerText = "Ingredients too short";
        //     ingredientsLabel.style.color = "red";
        //     e.preventDefault();
        //
        //     // If it's longer then 10 characters
        // }if(Ingredients.trim().length >= 10) {
        //     ingredientsLabel.innerText = "Ingredients Correct";
        //     ingredientsLabel.style.color = "green";
        //
        //     // If how to is empty string, or if it's shorter then 15 characters
        // }if(howTo.trim().length === 0 || howTo.trim().length < 15) {
        //     howToLabel.innerText = "How To description is too short";
        //     howToLabel.style.color = "red";
        //     e.preventDefault();
        //
        //     // If it's above 15 characters
        // }if(howTo.trim().length >= 15) {
        //     howToLabel.innerText = "How To Correct";
        //     howToLabel.style.color = "green";

        }

    }));
});