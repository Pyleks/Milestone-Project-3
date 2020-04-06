function myFunc() {
    console.log("This is a fking number", star_rate);
    if(star_rate >= 0.1 && star_rate <= 1.5) {
        goldenStarOne();
        emptyStarTwo();
        emptyStarThree();
        emptyStarFour();
        emptyStarFive();

    }else if(star_rate >= 1.6 && star_rate <= 2.5) {
        goldenStarOne();
        goldenStarTwo();
        emptyStarThree();
        emptyStarFour();
        emptyStarFive();

    }else if(star_rate >= 2.6 && star_rate <= 3.5){
        goldenStarOne();
        goldenStarTwo();
        goldenStarThree();
        emptyStarFour();
        emptyStarFive();

    }else if(star_rate >= 3.6 && star_rate <= 4.5){
        goldenStarOne();
        goldenStarTwo();
        goldenStarThree();
        goldenStarFour();
        emptyStarFive();

    }else if(star_rate >= 4.6 && star_rate >= 5){
        goldenStarOne();
        goldenStarTwo();
        goldenStarThree();
        goldenStarFour();
        goldenStarFive();

    } else {
        emptyStarOne();
        emptyStarTwo();
        emptyStarThree();
        emptyStarFour();
        emptyStarFive();
    }
}


function goldenStarOne() {
    let element = document.getElementById("starRating_1");
    element.classList.add("fas");
    element.classList.add("fa-star");
    element.classList.add("bg-blue");
}

function goldenStarTwo() {
    let element = document.getElementById("starRating_2");
    element.classList.add("fas");
    element.classList.add("fa-star");
    element.classList.add("bg-blue");
}
function goldenStarThree() {
    let element = document.getElementById("starRating_3");
    element.classList.add("fas");
    element.classList.add("fa-star");
    element.classList.add("bg-blue");
}
function goldenStarFour() {
    let element = document.getElementById("starRating_4");
    element.classList.add("fas");
    element.classList.add("fa-star");
    element.classList.add("bg-blue");
}

function goldenStarFive() {
    let element = document.getElementById("starRating_5");
    element.classList.add("fas");
    element.classList.add("fa-star");
    element.classList.add("bg-blue");
}

function emptyStarOne() {
    let element = document.getElementById("starRating_1");
    element.classList.add("far");
    element.classList.add("fa-star");
    element.classList.add("bg-blue");
}

function emptyStarTwo() {
    let element = document.getElementById("starRating_2");
    element.classList.add("far");
    element.classList.add("fa-star");
    element.classList.add("bg-blue");
}

function emptyStarThree() {
    let element = document.getElementById("starRating_3");
    element.classList.add("far");
    element.classList.add("fa-star");
    element.classList.add("bg-blue");
}

function emptyStarFour() {
    let element = document.getElementById("starRating_4");
    element.classList.add("far");
    element.classList.add("fa-star");
    element.classList.add("bg-blue");
}

function emptyStarFive() {
    let element = document.getElementById("starRating_5");
    element.classList.add("far");
    element.classList.add("fa-star");
    element.classList.add("bg-blue");
}

myFunc();

// let oneStar = document.getElementById('starRating_1');
// const TwoStar = document.getElementById('starRating_2');
// const ThreeStar = document.getElementById('starRating_3');
// const FourStar = document.getElementById('starRating_4');
// const FiveStar = document.getElementById('starRating_5');
//
//
//
// // One star
// oneStar.addEventListener('mouseover', function () {
//     hoverStarOne();
//     console.log("Yes");
//
// });
//
// oneStar.addEventListener('mouseout', function () {
//     removeStarOne();
//     console.log("Yes");
//
// });
//
// // Two Star
// TwoStar.addEventListener('mouseover', function () {
//     hoverStarOne();
//     hoverStarTwo();
//     console.log("Yes");
//
// });
//
// TwoStar.addEventListener('mouseout', function () {
//     removeStarOne();
//     removeStarTwo();
//     console.log("Yes");
//
// });
//
//
// // Three Star
// ThreeStar.addEventListener('mouseover', function () {
//     hoverStarOne();
//     hoverStarTwo();
//     hoverStarThree();
//     console.log("Yes");
//
// });
//
// ThreeStar.addEventListener('mouseout', function () {
//     removeStarOne();
//     removeStarTwo();
//     removeStarThree();
//     console.log("Yes");
//
// });
//
// // Four Star
// FourStar.addEventListener('mouseover', function () {
//     hoverStarOne();
//     hoverStarTwo();
//     hoverStarThree();
//     hoverStarFour();
//     console.log("Yes");
//
// });
//
// FourStar.addEventListener('mouseout', function () {
//     removeStarOne();
//     removeStarTwo();
//     removeStarThree();
//     removeStarFour();
//     console.log("Yes");
//
// });
//
// // Five Star
// FiveStar.addEventListener('mouseover', function () {
//     hoverStarOne();
//     hoverStarTwo();
//     hoverStarThree();
//     hoverStarFour();
//     hoverStarFive()
//     console.log("Yes");
//
// });
//
// FiveStar.addEventListener('mouseout', function () {
//     removeStarOne();
//     removeStarTwo();
//     removeStarThree();
//     removeStarFour();
//     removeStarFive()
//     console.log("Yes");
//
// });
//
// function hoverStarOne() {
//     let element = document.getElementById("starRating_1");
//     element.classList.add("bg-black");
// }
//
// function hoverStarTwo() {
//     let element = document.getElementById("starRating_2");
//     element.classList.add("bg-black");
// }
//
// function hoverStarThree() {
//     let element = document.getElementById("starRating_3");
//     element.classList.add("bg-black");
// }
//
// function hoverStarFour() {
//     let element = document.getElementById("starRating_4");
//     element.classList.add("bg-black");
// }
//
// function hoverStarFive() {
//     let element = document.getElementById("starRating_5");
//     element.classList.add("bg-black");
// }
//
// function removeStarOne() {
//     let element = document.getElementById("starRating_1");
//     element.classList.remove("bg-black");
// }
// function removeStarTwo() {
//     let element = document.getElementById("starRating_2");
//     element.classList.remove("bg-black");
// }
//
// function removeStarThree() {
//     let element = document.getElementById("starRating_3");
//     element.classList.remove("bg-black");
// }
//
// function removeStarFour() {
//     let element = document.getElementById("starRating_4");
//     element.classList.remove("bg-black");
// }
//
// function removeStarFive() {
//     let element = document.getElementById("starRating_5");
//     element.classList.remove("bg-black");
// }

// $().button('toggle');

