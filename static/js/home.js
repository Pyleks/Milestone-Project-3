$(document).ready(function() {
    document.getElementById("enable-overlay").addEventListener("click", function () {
        document.getElementById("overlay").style.display = "block";
    });

    document.getElementById("disable-overlay").addEventListener("click", function () {
        document.getElementById("overlay").style.display = "none";
    });

    let OneStar = document.getElementById('starRating_1');
    const TwoStar = document.getElementById('starRating_2');
    const ThreeStar = document.getElementById('starRating_3');
    const FourStar = document.getElementById('starRating_4');
    const FiveStar = document.getElementById('starRating_5');
    const starBox = document.getElementById('star-box');


    // One star
    OneStar.addEventListener('mouseover', function () {
        OneStar.classList.add("fas", "fa-star");
        TwoStar.classList.remove("fas", "fa-star");
        TwoStar.classList.add("far", "fa-star");
    });

    TwoStar.addEventListener('mouseover', function () {
        OneStar.classList.add("fas", "fa-star");
        TwoStar.classList.add("fas", "fa-star");
        ThreeStar.classList.remove("fas", "fa-star");
        ThreeStar.classList.add("far", "fa-star");
    });

    ThreeStar.addEventListener('mouseover', function () {
        OneStar.classList.add("fas", "fa-star");
        TwoStar.classList.add("fas", "fa-star");
        ThreeStar.classList.add("fas", "fa-star");
        FourStar.classList.remove("fas", "fa-star");
        FourStar.classList.add("far", "fa-star");
    });

    FourStar.addEventListener('mouseover', function () {
        OneStar.classList.add("fas", "fa-star");
        TwoStar.classList.add("fas", "fa-star");
        ThreeStar.classList.add("fas", "fa-star");
        FourStar.classList.add("fas", "fa-star");
        FiveStar.classList.remove("fas", "fa-star");
        FiveStar.classList.add("far", "fa-star");
    });

    FiveStar.addEventListener('mouseover', function () {
        OneStar.classList.add("fas", "fa-star");
        TwoStar.classList.add("fas", "fa-star");
        ThreeStar.classList.add("fas", "fa-star");
        FourStar.classList.add("fas", "fa-star");
        FiveStar.classList.add("fas", "fa-star");
    });

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
});









// function emptyStar() {
//     let element = document.getElementById("starRating_5");
//     element.classList.add("far", "fa-star");
//
// }
//
// function fullstar() {
//     let element = document.getElementById("starRating_5");
//     element.classList.add("fas", "fa-star");

// }




// $().button('toggle');

