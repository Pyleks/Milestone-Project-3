// Enabling Star review overlay if the criteria is met.
$(document).ready(function() {
    // If JS can find enable-overlay before initializing the code
    let enableOverlay = document.getElementById("enable-overlay");
    if(enableOverlay) {
        enableOverlay.addEventListener("click", function () {
            let overlayAuthor = document.getElementById("overlay-author");
            let enableUser = document.getElementById("overlay-user");
            // If the visitor is author, this IF statement get executed.
            if(overlayAuthor) {
                document.getElementById("overlay-author").style.display = "block";
                document.getElementById("disable-author-overlay").addEventListener("click", function () {
                    document.getElementById("overlay-author").style.display = "none";

                });
              // If the visitor is a user looking around, this section enables stat review overlay for voting .
            } else if(enableUser) {
                document.getElementById("overlay-user").style.display = "block";
                document.getElementById("disable-user-overlay").addEventListener("click", function () {
                    document.getElementById("overlay-user").style.display = "none";
                });
              // If the user is not logged in, they will be prompted to either login or register on the website.
            } else {
                document.getElementById("overlay-logged-out").style.display = "block";
                document.getElementById("disable-logged-out-overlay").addEventListener("click", function () {
                    document.getElementById("overlay-logged-out").style.display = "none";
                });
            }});



        let recipeLoad = document.getElementById("find-overlay");
        if(recipeLoad) {
            // Acquire all the variables for the star review to apply/remove stars.
            let OneStar = document.getElementById('starRating_1');
            const TwoStar = document.getElementById('starRating_2');
            const ThreeStar = document.getElementById('starRating_3');
            const FourStar = document.getElementById('starRating_4');
            const FiveStar = document.getElementById('starRating_5');
            const starBox = document.getElementById('star-box');

            // Star Review interactivity script, when hoovering over the stars, it will add all the stars up until
            // The point you hoover, so hoover over star 3 it will populate star 1, 2 and 3.
            // Adds stars as you hover over each.
            OneStar.addEventListener('mouseover', function () {
                OneStar.classList.add("fas", "fa-star");
                TwoStar.classList.remove("fas", "fa-star");
                TwoStar.classList.add("far", "fa-star");
            });

            // Adds stars as you hover over each.
            TwoStar.addEventListener('mouseover', function () {
                OneStar.classList.add("fas", "fa-star");
                TwoStar.classList.add("fas", "fa-star");
                ThreeStar.classList.remove("fas", "fa-star");
                ThreeStar.classList.add("far", "fa-star");
            });

            // Adds stars as you hover over each.
            ThreeStar.addEventListener('mouseover', function () {
                OneStar.classList.add("fas", "fa-star");
                TwoStar.classList.add("fas", "fa-star");
                ThreeStar.classList.add("fas", "fa-star");
                FourStar.classList.remove("fas", "fa-star");
                FourStar.classList.add("far", "fa-star");
            });

            // Adds stars as you hover over each.
            FourStar.addEventListener('mouseover', function () {
                OneStar.classList.add("fas", "fa-star");
                TwoStar.classList.add("fas", "fa-star");
                ThreeStar.classList.add("fas", "fa-star");
                FourStar.classList.add("fas", "fa-star");
                FiveStar.classList.remove("fas", "fa-star");
                FiveStar.classList.add("far", "fa-star");
            });

            // Adds stars as you hover over each.
            FiveStar.addEventListener('mouseover', function () {
                OneStar.classList.add("fas", "fa-star");
                TwoStar.classList.add("fas", "fa-star");
                ThreeStar.classList.add("fas", "fa-star");
                FourStar.classList.add("fas", "fa-star");
                FiveStar.classList.add("fas", "fa-star");
            });

            // A smart little trick to make the stars fully interactive by removing all stars, by taking the mouse
            // out it clears all stars.
            starBox.addEventListener('mouseleave', function () {
                OneStar.classList.remove("fas", "fa-star");
                OneStar.classList.add("far", "fa-star");

                TwoStar.classList.remove("fas", "fa-star");
                TwoStar.classList.add("far", "fa-star");

                ThreeStar.classList.remove("fas", "fa-star");
                ThreeStar.classList.add("far", "fa-star");

                FourStar.classList.remove("fas", "fa-star");
                FourStar.classList.add("far", "fa-star");

                FiveStar.classList.remove("fas", "fa-star");
                FiveStar.classList.add("far", "fa-star");
        });
}}});
