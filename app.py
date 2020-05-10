import os
import math
from os import path
import time
from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_pymongo import PyMongo, pymongo
from bson import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash

if path.exists("env.py"):
    import env

# Connection to Database
app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'TheHappyBun'
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.config['SECRET_KEY'] = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)

users_collection = mongo.db.users


# Landing page Route
@app.route('/')
@app.route('/recipes')
def recipes():
    rated_text = "Highest Rated"
    # Collecting all the recipes for highest ranking Recipes
    un_rated_recipes = mongo.db.Recipes.find({'totalStarValue': {"$lt": 1}}).sort("name", 1)
    high_rated_recipes = mongo.db.Recipes.find({'totalStarValue': {"$gt": 3, "$lt": 6}}).sort(
        [('totalStarValue', pymongo.DESCENDING),
         ("name", 1)])

    # Finding the last Recipe added and approved for the Recipe highlight on the page
    new_recipe = mongo.db.Recipes.find({'approved': True}) \
        .sort([('_id', pymongo.DESCENDING), (
        'approved', pymongo.ASCENDING)]).limit(1)

    # Same as above, but acquiring to it make sure there is no duplicates
    find_last = mongo.db.Recipes.find({'approved': True}) \
        .sort([('_id', pymongo.DESCENDING), (
        'approved', pymongo.ASCENDING)]).limit(1)


    # Finds the name from last Recipe
    for x in find_last:
        last_recipe = (x['name'])

    return render_template("index.html",
                           rated_text=rated_text,
                           un_rated_recipes=un_rated_recipes,
                           recipe_collection=high_rated_recipes,
                           new_recipe=new_recipe,
                           last_recipe=last_recipe)


# Medium Ranking Route landing page Route
@app.route('/sort-by-rating')
def sort_by_rating():
    rated_text = "Medium Rank"
    # Collecting all the recipes for Medium ranking Recipes
    un_rated_recipes = mongo.db.Recipes.find({'totalStarValue': {"$lt": 1}}).sort("name", 1).limit(9)
    medium_rated_recipes = mongo.db.Recipes.find({'totalStarValue': {"$lt": 4, "$gt": 0}}).sort(
        [('totalStarValue', pymongo.DESCENDING), ("name", 1)])

    # Finding the last Recipe added and approved for the Recipe highlight on the page
    new_recipe = mongo.db.Recipes.find({'approved': True}) \
        .sort([('_id', pymongo.DESCENDING), (
        'approved', pymongo.ASCENDING)]).limit(1)

    # Same as above, but acquiring to it make sure there is no duplicates
    find_last = mongo.db.Recipes.find({'approved': True}) \
        .sort([('_id', pymongo.DESCENDING), (
        'approved', pymongo.ASCENDING)]).limit(1)

    # Finds the name from last Recipe
    for x in find_last:
        last_recipe = (x['name'])

    return render_template('index.html',
                           rated_text=rated_text,
                           un_rated_recipes=un_rated_recipes,
                           recipe_collection=medium_rated_recipes,
                           new_recipe=new_recipe,
                           last_recipe=last_recipe)


# Administrative Portal Route
@app.route('/admin_portal')
def admin_portal():
    # Check if user in session
    if 'user' in session:
        # Check if the user is administrator
        if session['user'] == "Administrator":
            # Collects all users
            # And recipes waiting for approval
            all_users = mongo.db.users.find()
            all_users_number = all_users.count()
            pending_recipes = mongo.db.Recipes.find({'approved': False})
            pending_recipes_number = pending_recipes.count()
            return render_template("admin_portal.html",
                                   pending_recipes=pending_recipes,
                                   pending_recipes_number=pending_recipes_number,
                                   all_users=all_users,
                                   all_users_number=all_users_number)

        else:
            return redirect(url_for('recipes'))
    else:
        return redirect(url_for('login'))


# User Profile Route
@app.route('/profile/')
def profile():
    # Check if user is in session
    if 'user' in session:
        # Collect all recipes both approved and pending
        approved_recipes = mongo.db.Recipes.find({'approved': True})
        pending_recipes = mongo.db.Recipes.find({'approved': False})
        # Direct user to profile
        return render_template("profile.html",
                               approved_recipes=approved_recipes,
                               pending_recipes=pending_recipes)
    else:
        # Direct user to login
        return redirect(url_for('login'))


# Add Pastry Route
@app.route('/add_pastry')
def add_pastry():
    # Check if user is logged in
    if 'user' in session:
        # TODO Don't really need the line below but we will keep it until second sweep
        user_in_database = mongo.db.users.find_one({"username": session['user']})
        if user_in_database:
            # If user in DB, redirected to Create Recipe page
            return render_template('add_pastry.html')
    else:
        # Render the page for user to be able to log in
        return render_template("login.html")


# Insert Pastry Route
@app.route('/insert_pastry', methods=['POST'])
def insert_pastry():
    creation_date = time.strftime("%Y-%m-%d", time.localtime())
    recipe_ingredients = request.form.get('recipe_ingredients')
    recipe_ingredients_array = recipe_ingredients.split(", ")
    recipe_how_to = request.form.get('recipe_howTo')
    recipe_how_to_array = recipe_how_to.split(", ")
    mongo.db.Recipes.insert(
        {
            'name': request.form.get('recipe_name'),
            'callout': request.form.get('recipe_callout'),
            'imageUrl': request.form.get('imageUrl'),
            'ingredients': recipe_ingredients_array,
            'howTo': recipe_how_to_array,
            'portions': request.form.get('recipe_portions'),
            'author': session['user'],
            'approved': False,
            'createDate': creation_date,
            'lastUpdateDate': 0,
            'starRating-1': 0,
            'starRating-2': 0,
            'starRating-3': 0,
            'starRating-4': 0,
            'starRating-5': 0,
            'totalVotes': 0,
            'totalStarValue': 0
        })
    return redirect(url_for('recipes'))


# Insert/Calculate Rating Route
# TODO I don't understand my own code, recheck in the morning
@app.route('/insert_rating/<recipe_id>', methods=['POST', 'GET'])
def insert_rating(recipe_id):
    if 'user' in session:
        starRating = request.form['submit_rating']
        mongo.db.Recipes.update({'_id': ObjectId(recipe_id)},
                                {
                                    '$inc': {
                                        starRating: 1,
                                        'totalVotes': 1
                                    }
                                },
                                upsert=False
                                )
        star_array = mongo.db.Recipes.find_one({'_id': ObjectId(recipe_id)})
        star_calculator = ((5 * star_array["starRating-5"]
                            + 4 * star_array["starRating-4"]
                            + 3 * star_array["starRating-3"]
                            + 2 * star_array["starRating-2"]
                            + 1 * star_array["starRating-1"])
                           / (star_array["starRating-5"]
                              + star_array["starRating-4"]
                              + star_array["starRating-3"]
                              + star_array["starRating-2"]
                              + star_array["starRating-1"]))

        total_votes = (star_array["starRating-5"]
                       + star_array["starRating-4"]
                       + star_array["starRating-3"]
                       + star_array["starRating-2"]
                       + star_array["starRating-1"])

        star_calculator = (int(star_calculator))
        print(star_calculator)

        mongo.db.Recipes.update({'_id': ObjectId(recipe_id)},
                                {
                                    '$set': {
                                        'totalStarValue': star_calculator,
                                        'totalVotes': total_votes
                                    }
                                },
                                # protection={'seq': True, '_id': False},
                                upsert=True

                                )
        return redirect(request.referrer)

    else:
        return redirect(url_for('login'))


# Recipe Route
@app.route('/recipe/<recipe_id>/')
def recipe(recipe_id):
    # Get all data related to the corresponding recipe_id
    recipe_data = mongo.db.Recipes.find_one({"_id": ObjectId(recipe_id)})
    # Get the star rating information
    data = {'total': recipe_data["totalStarValue"]}
    return render_template('pastry.html', recipe_data=recipe_data, data=data)


# Edit Pastry Route
@app.route('/edit_recipe/<recipe_id>')
def edit_recipe(recipe_id):
    # Check if the user is in session
    if 'user' in session:
        # Collects all the recipe data for handling
        recipe_data = mongo.db.Recipes.find_one({"_id": ObjectId(recipe_id)})
        # Stores author for use later
        author = recipe_data["author"]
        # Make sure only administrator or author can edit the recipe
        if session['user'] == author or session['user'] == "Administrator":
            return render_template('pastryUpdate.html', recipe_data=recipe_data)
        else:
            flash('Only Admins can access this page!')
            return redirect(url_for('recipes'))
    else:
        return redirect(url_for('login'))


# Update Pastry Route
@app.route('/update_recipe/<recipe_id>', methods=["POST"])
def update_recipe(recipe_id):
    # Get the date for update
    last_updated_date = time.strftime("%Y-%m-%d", time.localtime())
    recipe_data = mongo.db.Recipes.find_one({'_id': ObjectId(recipe_id)})
    # Get author
    author = recipe_data["author"]
    # Get created Date
    created_date = recipe_data["createDate"]
    if 'user' in session:
        # Check if user is either author, administrator
        if session['user'] == author or session['user'] == "Administrator":
            recipe_ingredients = request.form.get('recipe_ingredients')
            recipe_ingredients_array = recipe_ingredients.split(", ")
            recipe_how_to = request.form.get('recipe_howTo')
            recipe_how_to_array = recipe_how_to.split(", ")
            mongo.db.Recipes.update({'_id': ObjectId(recipe_id)}, {
                'name': request.form.get('recipe_name'),
                'callout': request.form.get('recipe_callout'),
                'imageUrl': request.form.get('imageUrl'),
                'ingredients': recipe_ingredients_array,
                'howTo': recipe_how_to_array,
                'portions': request.form.get('recipe_portions'),
                'author': author,
                'approved': True,
                'createDate': created_date,
                'lastUpdateDate': last_updated_date,
                'totalVotes': 0,
                'starRating-1': 0,
                'starRating-2': 0,
                'starRating-3': 0,
                'starRating-4': 0,
                'starRating-5': 0,
                'totalVotes:': 0,
                'totalStarValue': 0

            })
            return redirect(url_for('recipes'))
        else:
            return redirect(url_for('recipes'))
    else:
        return redirect(url_for('login'))


# Delete Recipe Route
@app.route('/delete_recipe/<recipe_id>')
def delete_recipe(recipe_id):
    # Find Author
    find_author = mongo.db.Recipes.find_one({'_id': ObjectId(recipe_id)})
    author = find_author['author']
    # Check if user is in session
    if 'user' in session:
        # Check if the user is the author
        if session['user'] == author:
            # Deletes the Recipe
            mongo.db.Recipes.remove({'_id': ObjectId(recipe_id)})
            return redirect(url_for('recipes'))
        else:
            return redirect(url_for('recipes'))
    else:
        return redirect(url_for('login'))


# Delete User Route
@app.route('/delete_user/<recipe_id>')
def delete_user(recipe_id):
    mongo.db.users.remove({'_id': ObjectId(recipe_id)})
    return redirect(url_for('admin_portal'))


# Approve Recipe
@app.route('/approve_recipe/<recipe_id>')
def approve_recipe(recipe_id):
    mongo.db.Recipes.update({'_id': ObjectId(recipe_id)},
                            {
                                '$set': {
                                    'approved': True
                                }
                            },
                            # protection={'seq': True, '_id': False},
                            upsert=False

                            )
    return redirect(url_for('admin_portal'))


# Login Route
@app.route('/login', methods=['GET'])
def login():
    # Check if user is not logged in already
    if 'user' in session:
        user_in_db = users_collection.find_one({"username": session['user']})
        if user_in_db:
            # If so redirect user to his profile
            flash("You are logged in already!")
            return redirect(url_for('recipes'))
    else:
        # Render the page for user to be able to log in
        return render_template('login.html')


@app.route('/user_auth', methods=['POST'])
def user_auth():
    form = request.form.to_dict()
    user_in_db = users_collection.find_one({"username": form['username']})
    # Check for user in database
    if user_in_db:
        # If passwords match (hashed / real password)
        if check_password_hash(user_in_db['password'], form['user_password']):
            # Log user in (add to session)
            session['user'] = form['username']
            # If the user is admin redirect him to admin area
            if session['user'] == "admin":
                return redirect(url_for('recipes'))
            else:
                flash("You were logged in!")
                return redirect(url_for('recipes'))

        else:
            flash("Wrong password or user name!")
            return redirect(url_for('login'))
    else:
        flash("You must be registered!")
        return redirect(url_for('register'))


@app.route('/register', methods=['GET', 'POST'])
def register():
    # Check if user is not logged in already
    if 'user' in session:
        flash('You are already sign in!')
        print("You are alreay loggedin")
        return redirect(url_for('recipes'))

    if request.method == 'POST':
        form = request.form.to_dict()
        # Check if the password and password1 actualy match
        if form['user_password'] == form['user_password1']:
            # If so try to find the user in db
            user = users_collection.find_one({"username": form['username']})
            if user:
                flash(f"{form['username']} already exists!")
                return redirect(url_for('register'))
            # If user does not exist register new user
            else:
                # Hash password
                hash_pass = generate_password_hash(form['user_password'])
                # Create new user with hashed password
                users_collection.insert_one(
                    {
                        'username': form['username'],
                        'email': form['email'],
                        'password': hash_pass

                    }
                )
                # Check if user is actualy saved
                user_in_db = users_collection.find_one({"username": form['username']})
                if user_in_db:
                    # Log user in (add to session)
                    session['user'] = user_in_db['username']
                    return redirect(url_for('register'))
                else:
                    flash("There was a problem savaing your profile")
                    return redirect(url_for('register'))

        else:
            flash("Passwords dont match!")
            return redirect(url_for('register'))

    return render_template("register.html")


@app.route('/logout')
def logout():
    # Clear the session
    session.clear()
    flash('You were logged out!')
    return redirect(url_for('recipes'))


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=os.environ.get('PORT'),
            debug=True)
