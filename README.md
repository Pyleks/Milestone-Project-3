# The Happy Bun - Milestone Project 3

## Introduction
The Happy Bun is a public recipe website, designed to the users upload and share their own recipes
as well vote on the fellow members recipes. Comes with fully built in admin center for managing the
website content, as well a easy to use user portal for quick overview of each recipe provided by the
user.

## UX
This website have been designed to give any visitors easy access to all of it's content without
needing to signup, but provides the opportunity to register and contribute with their favorite
recipe that the other fellow members can rate using a 5 star rating system.
With the built in administrator portal, allowing for easy management and simplified approval process
for each recipe.

#### Relevant content
Making all content available to the visitor upon accessing the page, but most importantly, making that 
content relevant, giving first glimpse of all the highest rated recipes before they dive further into
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

> Want to add my own recipe to see if others like my pastry.  

> Want to use it as my own digital recipe book for easy sharing.  

> Provide high rating for a great recipe I found.  

> Tried a new recipe without rating to be experimental.

> A family member added a recipe they want to share. 

> Everyone at work loved my chocolate cake and asked for the recipe.

#### WireFrames

## Design Decisions
The design follows a minimalistic approach by only displaying content that is of value to the visitor, 
and keeping any overflow out of the design process, relying heavily on dynamic user content.
The happy bun takes much inspiration from [Tine mat](https://www.tine.no/oppskrifter).

#### Color Scheme

![alt text](static/img/color-scheme.jpg)

The Happy Bun uses light colors, to have a clear contrast with
any of the strong colors to enhance overall visibility, and minimizing bombarding the visitors
with colors, but rather finding the appropriate places to apply them.

#### Typography
I choose to only use __Roboto__ for the project, due to it's readability
and familiarity, as well avoiding having multiple fonts, fight for the users
attention.

## Features
All the features were developed with dynamic user content with appropriate restrictions.
Features like create, update, delete, approve are hidden behind a registration wall or login portal, but this do not 
hinder visitors from viewing the overall content.

### Implemented Features

#### Home Page (visitor)
The home page includes Login and registration menu at the very top, with all the highest rated recipes come into view
with the option to filter between highest and medium rated recipes, lower on the page you will find a own section
for the newest added recipe followed by all the unrated ones,
This page also shows the star rating for all recipe

#### Home Page (Registered/logged in)
After logging out, a few new features apper, the header will now show Logout and your username, which leads to your 
own profile page, a new button on the right side of the screen appears allowing you to add a recipe if you so want to.
this do not obstruct the view of the recipes itself.

#### Recipe Page (visitor)
On this page you can view the entire recipe, author, date added or updated, as well the image of the recipe.
This page is fully generated by the author of the recipe. 
the navigation bar stays the same on all pages as a visitor.

#### Recipe Page (logged in as Author and viewing your own recipe)
Once logged in there is a few new features appearing, and 1 disappearing, you now have the ability to update or delete
your own recipe, however you can not rate a recipe that you made.

#### Recipe Page (logged in but not the author)
Once again, as a registered user and logged in, you can view other pages, and rate them as you see fit, but you 
can not update or delete someone else recipe, so this feature is completely removed and limited to author and administrator
only.

#### User Profile (logged in)
This portal allow you to see all your recipes public recipes in a drop down menu, making it easy
if you want to remove any of them.  
This also contains a section for Waiting approval, once you post a recipe, it will go to approval
with the administrator, and appear under waiting approval, once approved it will appear under
Your Public Recipes.

#### Administrator Profile (logged in)
This page allows you to see every recipe that is waiting for approval, as well the number
without needing to open the drop down menu, for quick overview.
From here you can approve or delete recipe.  
This page also comes with a total view of all the registered users that can be deleted if necessary.

#### Add Recipe (Only available when logged in)
This can be found as a blue button once logged in on the home page.  
Allowing the user to add their own image url, recipe name, callout text, portions, ingredients and
the steps to make a recipe.  
This page looks the same for user and administrator

#### Update Recipe (Only available when logged in and author of the recipe)
Provides identical user interface as add recipe, but pulls all the data from the database
to be edited, updating a recipe at the moment will also wipe the rating, as this can be
abused.

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
- Limit Voting
- Provide user group policy, allowing administrator to provide anyone with admin rights if needed.


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
| [Material Bootstrap](https://getbootstrap.com/)  | Styling Framework to get a modern feel to the website.  |
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


