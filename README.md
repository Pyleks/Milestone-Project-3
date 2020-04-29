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
