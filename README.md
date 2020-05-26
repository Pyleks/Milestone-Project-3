# The Happy Bun - Milestone Project 3

## Introduction
Experience The Happy Bun, a easy to use recipe website, giving everyone access to their favorites just a few clicks away.
A safe and responsive website to provide you with the tools needed to try out your new favorite recipe. 
Share, Up-vote, and enjoy.

![alt text](static/img/responsive.jpg)

## Contents
1. [UX](#UX)
2. [Design Decisions](#Design-Decisions)
3. [Database](#Database)
4. [Features](#Features)
5. [Technologies](#Technologies)
6. [Testing](#Testing)
7. [Testing Summary](#Testing-Summary)
8. [Deployment](#Deployment)
9. [Credits](#Credits)
10. [Note To Assessor](#Assessor)
11. [Disclaimer](#Disclaimer)


## UX
This website have been designed to give any visitors easy access to all of it's content without
needing to signup, but provides the opportunity to register and contribute with their favorite
recipe that the other fellow members can rate using a 5 star rating system.
With the built in administrator portal, allowing for easy management and simplified approval process
for each recipe.

#### Relevant content
Making all content available to the visitor upon accessing the page, but most importantly, making that 
content relevant, providing first glimpse of all the highest rated recipes before they dive further into
The Happy Bun.


#### Traversing
Key design decision allowing visitors, users, and administrator to access the entire page, and all
CRUD functionality (Create, Read, Update and Delete) within as few clicks as possible, yet get to
experience the entire platform for ease of use.


#### Smart Filter
Built in Smart filter to manage the content on the website automatically, allowing high rated recipes
to get visibility on the same line as brand new content, providing the visitor a quick overview
over the best and the newest.

#### User Stories
> Quick access to recipes for baking that is easy to follow.  

> Sharing my favorite recipe with co-workers, family and friends.  

> Want to try a new recipe that have good rating.  

> Want to add my own recipe to see if others like my recipe.  

> Want to use it as my own digital recipe book for easy sharing.  

> Provide high rating for a great recipe I found.  

> Tried a new recipe without rating to be experimental.

> A family member added a recipe they want to share. 

> Everyone at work loved my chocolate cake and asked for the recipe.

#### WireFrames
<details>
<summary>Main Page</summary>
<br>
<p>The button on the wireframe have been removed, and replaced with a new button next to Filter since this was made</p>

![Main Page Desktop](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Main%20Page%20Desktop.png)
![Main Page Tablet](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Main%20Page%20Tablet.png)
![Main Page Phone](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Main%20Page%20Phone.png)

</details>

<details>
<summary>Recipe Page</summary>
<br>

![Recipe Page Desktop](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Recipe%20Page%20Desktop.png)
![Recipe Page Tablet](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Recipe%20Page%20Tablet.png)
![Recipe Page Phone](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Recipe%20Page%20Phone.png)

</details>

<details>
<summary>Profile Page</summary>
<br>

![Profile Page Desktop](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Profile%20Page%20Desktop.png)
![Profile Page Tablet](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Profile%20Page%20Tablet.png)
![Profile Page Phone](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Profile%20Page%20Phone.png)

</details>

<details>
<summary>Administrator Page</summary>
<br>

![Administrator Page Desktop](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Administrator%20%20Desktop.png)
![Administrator Page Tablet](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Administrator%20Page%20Tablet.png)
![Administrator Page Phone](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Administrator%20Page%20Mobile.png)

</details>

<details>
<summary>Create Recipe</summary>
<br>
<p>I overhauled this page, adding 2 new text areas, to add recipe ingredients easier.</p>

![Create Recipe Desktop](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Create%20Recipe%20Page%20Desktop.png)
![Create Recipe Tablet](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Create%20Recipe%20Page%20Tablet.png)
![Create Recipe Phone](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Create%20Recipe%20Page%20Mobile.png)

</details>

<details>
<summary>Update Recipe</summary>
<br>
<p>This page also got overhauled to pull information from the data base into the text area.</p>

![Update Recipe Desktop](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Update%20Recipe%20Page%20Desktop.png)
![Update Recipe Tablet](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Update%20Recipe%20Page%20Tablet.png)
![Update Recipe Phone](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Update%20Recipe%20Page%20Mobile.png)

</details>

<details>
<summary>Register Page</summary>
<br>

![Register Page Desktop](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Register%20Page%20Desktop.png)
![Register Page Tablet](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Register%20Page%20Tablet.png)
![Register Page Phone](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Register%20Page%20Mobile.png)

</details>

<details>
<summary>Login Page</summary>
<br>

![Login Page Desktop](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Login%20Page%20Desktop.png)
![Login Page Tablet](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Login%20Page%20Tablet.png)
![Login Page Phone](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/Login%20Page%20Mobile.png)

</details>


<details>
<summary>404 Page</summary>
<br>

![404 Page Desktop](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/404%20Page%20Desktop.png)
![404 Page Tablet](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/404%20Page%20Tablet.png)
![404 Page Phone](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/404%20Page%20Mobile.png)

</details>


<details>
<summary>500 Page</summary>
<br>

![500 Page Desktop](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/500%20Page%20Desktop.png)
![500 Page Tablet](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/500%20Page%20Tablet.png)
![500 Page Phone](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/wireframes/500%20Page%20Mobile.png)

</details>


## Design Decisions
The design follows a minimalistic approach by only displaying content that is of value to the visitor, 
and keeping any overflow out of the design process, and relying heavily on dynamic user content.
The happy bun takes much inspiration from [Tine mat](https://www.tine.no/oppskrifter).

#### Color Scheme

![alt text](static/img/color-scheme.jpg)

The Happy Bun uses light colors, to have a clear contrast with
any of the stronger colors to enhance overall visibility, and minimizing bombarding the visitors
with colors, but rather finding the appropriate places to apply them.

#### Typography
I choose to use __Roboto__ for majority of the text, due to it's readability, and
__Love Ya Like A Sister__ for certain headings to make the text stand out, and give the page
a bit more personality.

## Database
This website have 2 databases, 1 for users and 1 for recipes, these are both being used to connect
with each other as well being used to store various calculations, and store all general information on the page.
All the content on the page is generated from these 2 databases.

<details>
<summary>User Database</summary>
<br>

![User Database](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/img/user-database.png)

</details>

<details>
<summary>Recipe Database</summary>
<br>

![Recipe Database](https://github.com/Pyleks/Milestone-Project-3/blob/master/static/img/recipe-database.png)

</details>


### User database explained
- Username: Stores the chosen username added by the user.
- Email: Stores the email address added by the user.
- Password: Is a hashed and salted password, so no password is in clear text inside the database.

### Recipe database explained.
- Name: Is what the user choose to call the recipe.
- Description: This is where you can type a small text to "sell" your recipe to the visitor.
- ImageURL: Here you can choose any image off the web for your recipe.
- Ingredients: This is stored as an array, and unpacks on the website, storing all ingredients the user choose to use.
- Recipe: Also store as an array, and unpacks on the recipe page for viewing.
- Portions: Added by user, simply how many portions added the recipe contains.
- CreatedDate: This takes the date the recipe is created and apply it to the details when viewing the recipe later.
- LastUpdatedDate: If the user choose to update it later, it removes CreateDate and apply LastUpdatedDate.

### 5 star rating system broken down.
This require it's own section to explain what is happening to the rating data.
- Provides the user with a total of 5 stars to click, and this is how they align.
- StarRating - 1
- StarRating - 2
- StarRating - 3
- StarRating - 4
- StarRating - 5
- Total Votes
- TotalStarValue

This takes all the starRatings 1 - 5 preform a multiplication and division calculation, and applies it to 
totalStarValues, which again is used by the filtering function to place all the recipes in the right order on the website.  
Total Votes is simply to show how many votes each of the recipes received.

### Relations
The biggest relation is between username and author, as the application makes the decision if they can either vote
or update/delete the recipe.
As well in the user portal, will display all the recipes provided by the logged in user, as well all recipes
waiting for approval.


## Features
All the features were developed with dynamic user content with appropriate restrictions.
Features like create, update, delete, approve are hidden behind a registration wall or login portal, but this do not 
hinder visitors from viewing the overall content.


#### Home Page (visitor)
The home page includes Login and Registration menu at the very top, where all the highest rated recipes comes into view
with the option to filter between highest and medium rated recipes. 
Lower on the page you will find a own section for the newest added recipe followed by all the unrated.
This page also shows the star rating for all recipes.

#### Home Page (Registered/logged in)
After logging in a few new features appear, the header will now show Logout and your username, which leads to your 
own profile page. 
A new button next to the filter to add a new recipe, originally this button was a circle on the right
side, but was reported to be overseen too easily. This do not obstruct the view of the recipes itself.

#### Recipe Page (visitor)
On this page you can view the entire recipe, author, date added or updated, star rating as well as the image of the recipe.
This page is fully generated by the author of the recipe. 


#### Recipe Page (logged in as Author and viewing your own recipe)
Once logged in there is a few new features appearing, and 1 disappearing, you now have the ability to update or delete
your own recipe, however you can not rate a recipe that you have made.

#### Recipe Page (logged in but not the author)
Once again, as a registered user and logged in you can view other pages, and rate them as you see fit, but you 
can not update or delete someone else recipe, so this feature is completely removed and limited to author and administrator
only.

#### User Profile (logged in)
This portal allow you to see all your public recipes in a drop down menu, making it easy
if you want to remove any of them.  
This also contains a section for Waiting approval, once you post a recipe, it will go to approval
with the administrator, and appear under waiting approval, once approved it will appear under
your Public Recipes.

#### Administrator Profile (logged in)
This page allows you to see every recipe that is waiting for approval, as well the number
without needing to open the drop down menu, for quick overview.
From here you can approve or delete recipe.  
This page also comes with a total view of all the registered users that can be deleted if necessary.

#### Add Recipe (Only available when logged in)
This can be found as a blue button once logged in on the home page.  
Allowing the user to add their own image url, recipe name, description text, portions, ingredients and
the steps to make a recipe.  
This page looks the same for user and administrator

#### Update Recipe (Only available when logged in and author of the recipe)
Provides identical user interface as add recipe, but pulls all the data from the database
to be edited, updating a recipe will no longer remove the rating(As originally designed to do).

#### Smart Filter
This filter all content on the home page depending on rating, and when it was added to give
all recipes appropriate viability.

#### 5 Star Rating System
This system uses whole numbers to preform a complex calculation based on the number of votes,
as well what rating they choose, this featured is also powered by Javascript to make it 
more dynamic when choosing the right star.

### Features I want to implement  
In time of development, I noticed multiple important features that should be added
for the complete experience, but they are not necessary for the project to be completed
and was left to the end.
- Limit Voting.
- Provide user group policy, allowing administrator to provide anyone with admin rights if needed.
- More comprehensive but yet simplified way of adding new recipes, + a tagging system for later filtering and searching.
- Add Reset password for users in the user profile.
- Add reset password option for Admin to preform on all users.
- Password security from Python code and not just JS.
- A more Stylized feedback to the user.


### Implemented Feature Summary
| Feature List        | Difficulty          |
|:------------- |:-------------:|
| Create Account     | 3 | 
| Delete Account | 2      | 
| Login     | 3|
| Create Recipe | 4      | 
| Edit Recipe | 3      | 
| Approve Recipe | 3      | 
| Delete Recipe | 2      | 
| Standard Filter | 5      | 
| Smart Filter | 5     | 
| 5 Star Rating System | 5      | 

## Technologies

### Languages
| Languages  | Usage |
| :------------- | :------------- |
| [HTML](https://www.w3schools.com/html/)  | Creating the entire foundation for the website.  |
| [CSS](https://www.w3schools.com/css/)  | Applying styling across all pages.  |
| [JavaScript](https://www.w3schools.com/js/)  | Add logic rules to all input forms, 5 star rating, and buttons.  |
| [Python](https://www.python.org/)  | Runs the entire backend server code, including the logic and safety.  |



### Libraries

|Libraries  |Usage  |
| :-------------| :-------------|
| [Material Bootstrap](https://fezvrasta.github.io/bootstrap-material-design/)  | Styling Framework to get a modern feel to the website.  |
| [Font Awesome](https://fontawesome.com/)  | Used for all website icons.  |
| [jQuery](https://jquery.com/) | Simplifying some of the get id's for Javascript.  |
| [Google Fonts](https://fonts.google.com/) | For all fonts on all pages.  |


### Python Libraries and Framework

|Libraries  |Usage  |
| :-------------| :-------------|
| [Flask](https://flask.palletsprojects.com/en/1.1.x/)  | Required to run all route operations in the code.  |
| [OS](https://docs.python.org/3/library/os.html)  | Required to read environmental variables.  |
| [time](https://docs.python.org/3/library/time.html)  | Required to generate timestamp which later is used in the database.  |
| [flask_pymongo](https://flask-pymongo.readthedocs.io/en/latest/)  | Most search queries requires pyMongo to operate in the code.  |
| [bson](https://api.mongodb.com/python/current/api/bson/index.html)  | Required to acquire the object ID of the different data-sets.  |
| [werkzeug.security](https://werkzeug.palletsprojects.com/en/1.0.x/installation/)  | Required to operate hash, salt operations for secure passwords.  |

### Database

|Libraries  |Usage  |
| :-------------| :-------------|
| [MongoDB](https://getbootstrap.com/)  | Store all content for the database for recipes and users.  |

## Testing
Due to all the features on the website, the testing have been broken up in multiple sections, each covering testing such as
Intended use, Features, Responsiveness, Security and Code Testing, as well as Feedback.
After all the tests there will be a summary section for a quick overview over all passed tests and bugs found.
All tests will be preformed in Chrome, Firefox, and Edge on Desktop, and native Android browser.

__I have tested the following__
- Intended use (Interactivity)  
- URL Injection (Security)
- Responsiveness across devices
- W3 HTML Validator using URL and copy/paste code
- W3 CSS Validator
- JS Hint
- PEP8

### Intended Use on Chrome, Firefox and Edge (Interaction)
#### Landing Page(Not logged in)
- Opening website on full screen expecting all images, icons, labels to be displayed with correct ratio.
- Clicking on a recipe image expecting it to redirect to recipe correctly.
- Clicking newest recipe image expecting it ro redirect to the newest recipe correctly.
- Clicking Filtering from Highest Rated to Medium expect it to filter for 1 - 3 star ratings correctly.
- Clicking Filtering from Medium to Highest Rated expect it to filter for 4 - 5 stars rating correctly.
- Clicking Login to redirect me to login page.
- Clicking Register to redirect me to registration page.
- Hoovering over images to experience grey overlay indication.

#### Recipe Page(Not logged in)
- Opening Recipe page, expecting all icons, text to display correctly.
- Clicking on login to redirect me to login page.
- Clicking on register to redirect me to registration page page.
- Clicking stars expecting to not be able to review.
- Clicking "The happy Bun" get redirected to main landing page.

#### Registration Page(Not logged in)
- Attempted putting in 1 letter into username, and left email password and confirm password blank
Expecting feedback on email.
- Attempted putting in 1 letter into username, leaving .com in email, and add too short password with identical confirm password
Expecting feedback on all input boxes.
- Fixed username to 5 letters, left email, password and confirm password, still block user from register.
- Fixed email as well to include .com, left password too short, and confirm password still matches.
Expecting password to inform it's too short.
- Fixed password, but left confirm password.
Expecting confirmed password to inform it's incorrect.
- Fixed password, now all registration rules are correct, allowing user to register.

#### Login Page
- Typed in username only and click login, asked for password.
- Typed in username and wrong password, (Bug)expected feedback, non given but was not logged in.
- Typed in only password, but no username, was informed to type in username too.
- Typed in correct username and correct password, website allowed me to login.
- When logged in successfully, expecting the page to redirect user to landing page.

#### Landing Page(Logged in)
- Expecting the navigation bar to no longer have Login and Register, but Logout and Username.
- Expecting to see a blue + button to add recipes, added correctly.
- Clicked Blue + icon, getting redirected to create recipes page.
- Clicked username, getting redirected to client profile page.
- Clicked any of the images, taking me to the recipe page.

#### Recipe Page(Not author, but Logged in)
- Visiting Recipe page that my user have not made, expect to not see update or delete buttons.
- Clicked rating stars to rate, hoover over each star expecting to see them populate 1 by 1.
- Clicked the preferred rating, expecting to see the total rate increase.
- view recipe correctly.
- Clicked website name to redirect to main page.

#### Recipe Page(author, and Logged in)
- Visiting recipe page as author, expecting to see delete button and update button in red and blue.
- Clicking update button redirect user to update page correctly.
- Clicking delete button, delete the recipe and redirect user to main page.
- Attempting to rate my own submission provides feedback "You can't rate your own submission".

#### User Portal(only accessible when logged in)
- Visiting user portal, expecting to see "Your Public Recipes" and "Waiting Approval".
- Expanding "Your Public Recipes" displays all recipes the user have posted with the option to delete any of them.
- Expanding "Waiting Approval" shows all recipes added, but have not yet been approved with the option to delete it.
- Clicking delete in "Your Public Recipes" removes the recipe from the database. (Bug user get redirected to main page).
- Clicking delete in "Waiting Approval" removes the recipe from the database. (Bug user get redirected to main page).

#### Admin Portal(only accessible when logged in as Administrator)
- Visiting admin portal, expecting to see "Waiting Approval" and users.
- Expecting to see the number of new recipes added and waiting for approval.
- Expanding waiting approval, to see all the recipe details and approve and delete button.
- Clicking Approve will transfer the recipe into the recipe main page.
- Clicking delete will remove the recipe from database.
- Expanding Users, will see all user names and emails + the option to delete the user.

#### Create new recipe(Only accessible logged in)
- Attempting to submit the form empty, expecting to receive error message across the whole form.
- Adding random letters in url, error message don't change.
- Adding a regular website url, (bug get approved).
- Adding 1 letter in recipe name, but is told it's too short.
- Adding more then 3, and get approved.
- Adding plenty of empty spaces in callout text, is registered as no input.
- Added more then 8 characters in callout, and it's approved.
- Adding letters into portions, feeds back "Please use numbers only".
- Adding number works.
- Adding ingredients, anything less then 8 characters will inform user it's too short.
- Adding How To steps, anything less then 12 characters will inform the user it's too short.
- Click create, pushes the submission to Admin portal.

#### Update recipe(Only accessible logged in and on your own recipes)
- Follows all the same rules as creating new recipe.
- Attempting to remove any fields, block it from updating.
- Once user click update, it cleans the rating.

### URL Injection (Security)
Just because certain buttons, or icons are not displaying don't mean we can't preform certain malicious
actions like deleting content made by other users, this section will attempt to preform different URL injections
to see if we can by pass security.

#### Add recipe without being logged in.
- Upon using "https://the-happy-bun.herokuapp.com/add_recipe" I attempt adding recipe without using login credentials.  
This redirect the visitor to login window

#### Delete recipe without being logged in.
- Upon using "http://the-happy-bun.herokuapp.com/delete_recipe/5ea599ad92cf716f6bd77557" I attempted to delete a recipe without
being logged in, this redirected the visitor to login window.

#### Approve recipe without being logged in.
- upon using "http://the-happy-bun.herokuapp.com/approve_recipe/5eb68067da4d9fe0620a801d" I attempt to approve a recipe without being logged in.  
This redirect the visitor to login window, but also approved it.

#### Update recipe without being logged in.
- Upon using "http://the-happy-bun.herokuapp.com/edit_recipe/5ea599ad92cf716f6bd77557" I attempt to access update recipe without
being logged in, this redirected the visitor to login window.

#### Delete user without being logged in.
- Upon using "http://the-happy-bun.herokuapp.com/delete_user/5ea59229470f17c99fd02da0" I attempt to delete a user without
being logged in, and successfully deleted the administrator of the page and redirected the user to login page.

#### Delete recipe to another user while logged in.
- Upon using "http://the-happy-bun.herokuapp.com/delete_recipe/5ea599ad92cf716f6bd77557" I attempted to delete a recipe made by someone else  
This redirected the user to not found URL.

#### Update recipe to another user while logged in.
- Upon using "http://the-happy-bun.herokuapp.com/edit_recipe/5ea70117dbca44bff3063847" I attempted to update someone else recipe.
This redirected the user to main page.

#### Approve recipe while being logged in as a user but not administrator
- Upon using "http://the-happy-bun.herokuapp.com/approve_recipe/5eb68ff7eaa1e74ae8f3e6cd" I attempted to approve a recipe without
being logged in as administrator, any user was able to approve the recipe.

### Responsiveness
In this test the website was tested to all default device sizes provided my chrome as well responsive
slider across Chrome, Firefox and Edge.

  <ol>
  <li>360 x 640 Galaxy S5</li>
  <li>375 x 667 iPhone 6/7/8</li>
  <li>375 x 812 iPhone X</li>
  <li>411 x 731 Pixel 2</li>
  <li>411 x 823 Pixel 2 XL</li>
  <li>414 x 736 iPhone 6/7/8 Plus</li>
  <li>768 x 1024 iPad</li>
  <li>1024 x 1366 iPad Pro</li>
   </ol>

## Testing Summary

### Functionality
| Page        | Bugs           | Status  |
|:------------- |:-------------| :-----:|
| Main Page(visitor)     | No issues found | Good |
| Main Page(logged in)     | No issues found      | Good |
| Recipe Page(visitor) | No issues found  | Good |
| Recipe Page(logged in Visitor) | No issues found     | Good |
| Recipe Page(logged in Author) | No issues found     | Good |
| Registration Page | No issues found     | Good |
| Login Page) | No issues found     | Good |
| User Portal | No issues found     | Good |
| Admin Portal | No issues found     | Good |
| Create New Recipe | No issues found    | Good |
| Update Recipe | No issues found     | Good |


### Big issue found (Fixed)
Towards the end I noticed how poor user experience my update section became, but due to time restraints,I originally planned
to leave this out, but decide to dive back in and solve it.

#### Big issue solution
This was fixed by revamping the entire section where they provide ingredients and recipe steps.


### Approval issue found(Fixed)
If they make the recipe, then enter it from "Waiting Approval" section, and click update, the recipe get set to approval
setting right away, By passing admin approval.

#### Approval issue solution:
I fetched the current approval status from the database, and fed it back to the database, making the approval stay the same.


### URL Injection
| Attempt        | Bugs           | Status  |
|:------------- |:-------------| :-----:|
| Delete user without being logged in)     | This was fully possible with http://the-happy-bun.herokuapp.com/delete_user/5ea59229470f17c99fd02da0 | Fixed |
| Delete recipe to another user while logged in    | Not possible to delete the recipe, but they get redirected to 404 | Fixed |
| Approve recipe while being logged in as a user but not administrator   | This was fully possible without being logged in as admin using "http://the-happy-bun.herokuapp.com/approve_recipe/5eb68ff7eaa1e74ae8f3e6cd| Fixed |

### Responsiveness
| Page        | Bugs           | Status  |
|:------------- |:-------------| :-----:|
| Main Page     | Small image scaling issue where it became too narrow on small devices | Fixed |
| Main Page     | Add recipe button on mobile devices was too big, to changed it with a more user friendly one| Fixed |
| Main Page     | Strange issue with media breakpoints, the images were not scaling well with 992px and 576px, so dropped the breakpoint to 991 and 575 to fix issue | Fixed |
| Recipe Page     | Main image did not scale correctly, and would look stretched | Fixed |


### W3 HTML Validator
| Page        | Bugs           | Status  |
|:------------- |:-------------| :-----:|
| All Pages     | Reoccurring ALT tag missing on all images on all pages | Fixed |
| Profile Page    | Redundant ID's  | Fixed |
| Profile Page    | Duplicate ID's  | Fixed |
| Admin Page Page    | a tag inside button | Fixed |
| All pages    | Many minor issues | Fixed |


### W3 CSS Validator
| Page        | Bugs           | Status  |
|:------------- |:-------------| :-----:|
| CSS Stylesheet     | Minor issues with stray symbols | Fixed |

### JSHint
| Page        | Bugs           | Status  |
|:------------- |:-------------| :-----:|
|  registration.js  | Missing semicolon | Fixed |
|  createRecipe.js  | Missing semicolon | Fixed |
|  home.js  | No issues| Good |
|  All JS scripts  | Struggled to see my variables in use, so left untouched | No fix needed |



### PEP8
| Page        | Bugs           | Status  |
|:------------- |:-------------| :-----:|
|  app.py  | Had many lines above above 79 character in length | Almost Fixed all |

## Deployment
The following steps will explain how you can get the website running on heroku and locally with just a few steps.

### Tools required to be installed
- Python 3 (Pip 3 comes installed by default)
- Git
- Heroku CLI

### Branches
Please note there are a total of 4 branches, but to get the latest up to date, we want to focus on
the master branch.  
- Master
- Authentication
- VariableOverhaul
- Create_Recipe_overhaul

### How to Clone and set up the website locally in a few steps
#### 1. Clone website
1. Go to [GitHub](https://github.com/Pyleks)
2. Click Repositories.
3. Locate Milestone-Project-3.
4. Open [Milestone-Project-3](https://github.com/Pyleks/Milestone-Project-3)
5. Click the green button clone to download.
6. Or clone from URL using the following command in terminal: <code>got clone https://github.com/Pyleks/Milestone-Project-3.git</code>

#### 2. Installing Requirements.
Once you have the project cloned on your computer, you are ready to set everything up.
1. Open the Terminal and navigate to __Milestone-Project-3__ folder on the computer.
2. Install the libraries from requirements.txt by typing <code>pip3 install -r requirements.txt</code>

#### 3. Setting up the database keys
Once the project is cloned, and you have the libraries installed from requirements.txt, we can now set up
the database.
1. Create a python file called __env.py__, and place it outside of the folder structure, next to app.py.
2. Inside the newly created env.py file, you need to add information to 2 variables and 1 import.  
3. At the top of env.py add the following line <code>import os</code>.
4. Then add the following 2 lines below.
5. <code>os.environ["Mongo_URI"] = "mongodb+srv://myRoot:__MONGODB-PASSWORD__@__CLUSTER-NAME__-96wib.mongodb.net/__DATABASE-NAME__?retryWrites=true&w=majority"</code>.
6. <code>os.environ["SECRET_KEY"] = "Can be anything you want"</code>.  
7. Add <code>os.environ["MONGO_DBNAME"] = 'Your database name'</code>.  


#### 4. Understand the Connection string
mongodb+srv://myRoot:__MONGODB-PASSWORD__@__CLUSTER-NAME__-96wib.mongodb.net/__DATABASE-NAME__?retryWrites=true&w=majority
1. MongoDB-Password, you need to provide the password for your MongoDB atlas account.
2. Cluster-Name is the name you create when setting up MongoDB for the first time, it is where your databases are stored, often shown at the top of the page.
3. Database-Name this is the name of the database you have created, can be found under the Collections tab inside MongoDB Atlas.


#### 6. Running the Project locally
1. Run app.py
2. Paste <code>http://127.0.0.1:5000/ </code> into your browser URL to access.


### Deploy The Happy Bun on Heroku
Before beginning this step, you need to complete the above step 1. Clone Website.
#### 1. Setting up Heroku
1. Create an account on [Heroku](https://dashboard.heroku.com/login).
2. Click New button, then Click Create new app.
3. Give it a name and choose your region.
4. Click Create App.
5. Find your App name on the dash board, and enter.
6. Click Settings, and locate Config Vars, and fill in like shown below (Just edit out the placeholder text).


| Key        | Value           | 
|:------------- |:-------------| 
|  IP  | 0.0.0.0 | 
|  PORT  | 5000 | 
|  MONGO_URI  | "mongodb+srv://myRoot:MONGODB-PASSWORD@CLUSTER-NAME-96wib.mongodb.net/DATABASE-NAME?retryWrites=true&w=majority" | 
|  MONGO_DBNAME  | Name of the database |
|  SECRET_KEY  | "Secret key you made for local" |


#### 2. Setting up our files
At this stage, go back to your IDE, we are now setting everything up for pushing to Heroku.
1. If the Procfile is missing, please preform the following command in your terminal <code>echo web: python3 app.py > Procfile</code>
2. If the requirements.txt is missing, please preform the following command in your terminal <code>pip3 freeze > requirements.txt</code>


#### 3. Deploy to Heroku
1. In your Terminal type <code>heroku login</code>.  
2. Then <code>git push heroku master </code>.  
3. Open Heroku website.
4. Navigate to the app (The Happy Bun), and click Open App, and now everything should be running.

## Credits

Big shout out to Anna_CI for showing me [DCD_LEAD](https://github.com/MiroslavSvec/DCD_lead)
Authentication for Heroku, this made the entire project completely understandable and everything else that
followed was much easier.

Also part of the Login is taken from the project above, and tweaked to some degree.

Also massive help from Mentor Aaron for showing me pagination in practise, even though at writing moment
I've not had the time to implement it yet, but hopefully will do so very soon.

A huge shout out to Igor_lead that provided some great input on some array challenges I had early on.
Helped me a ton.

Another huge thank you to Tutor Slack Team and Simen(Eventyret) who helped when I had a difficult time
implementing my 5 star rating system, I know Tutor was suffering when my overly complex solution was trying
to make it's way into my Milestone Project.


I also got amazing inspiration from [Tine Mat](https://www.tine.no/oppskrifter)
A Norwegian website that do recipes, so much of my design is heavily influenced by this page.

Thanks to BeeZee for her suggestion on the unique fonts for headers

#### Images
404/500 Image license is purchased by me from shutter stock.  

All other images are acquired from [Pixaby](https://pixabay.com/)   

Favicon is also acquired from [Pixaby](https://pixabay.com/no/vectors/eple-smil-barn-smiling-innh%C3%B8sting-3226653/)  

## Assessor
When reviewing the page, it is advisable to use the admin account, as you get access to all almost all the features,
Especially since you can add a new recipe and approve it yourself, without having to change accounts.
Please note the main difference between a user account and Admin account is that user accounts can not approve
But user accounts can see a list of their own submissions.

It is also advisable to try this process with a regular and admin account to see the entire process.

## Disclaimer
This project is for Educational purpose only