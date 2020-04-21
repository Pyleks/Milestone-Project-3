import os
from os import path
import time
from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_pymongo import PyMongo, pymongo
from bson import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if path.exists("env.py"):
    import env


app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'nordicPastry'
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.config['SECRET_KEY'] = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)

users_collection = mongo.db.users
recepie_collection = mongo.db.imageDB

@app.route('/')
@app.route('/recipes')
def recipes():
    high = "Unsorted"
    remaining = mongo.db.imageDB.find().skip(9).limit(11)
    rating = mongo.db.imageDB.find().sort([('totalStarValue', pymongo.DESCENDING),
                                           ('totalVotes', pymongo.DESCENDING),
                                           ('approved', pymongo.DESCENDING)]).limit(6)

    new_recipe = mongo.db.imageDB.find({'approved': True}).sort([('_id', pymongo.DESCENDING),
                                        ('approved', pymongo.ASCENDING)]).limit(1)

    find_last = mongo.db.imageDB.find({'approved': True}).sort([('_id', pymongo.DESCENDING),
                                        ('approved', pymongo.ASCENDING)]).limit(1)

    for x in find_last:
        last_recip = (x['name'])

    return render_template("index.html",
                           last_recip=last_recip,
                           rating=rating,
                           filterName=high,
                           remaining=remaining,
                           displayImg=new_recipe,
                           imageDB=mongo.db.imageDB.find().limit(9))


@app.route('/sort-by-rating')
def sort_by_rating():
    high = "Highest Rated"
    remaining = mongo.db.imageDB.find().skip(9).limit(9)
    rating = mongo.db.imageDB.find().sort([('totalStarValue', pymongo.DESCENDING),
                                           ('totalVotes', pymongo.DESCENDING),
                                           ('approved', pymongo.DESCENDING)]).limit(6)

    new_recipe = mongo.db.imageDB.find({'approved': True}).sort([('_id', pymongo.DESCENDING),
                                        ('approved', pymongo.ASCENDING)]).limit(1)

    find_last = mongo.db.imageDB.find({'approved': True}).sort([('_id', pymongo.DESCENDING),
                                      ('approved', pymongo.ASCENDING)]).limit(1)

    for x in find_last:
        last_recip = (x['name'])

    return render_template('index.html',
                           last_recip=last_recip,
                           remaining=remaining,
                           displayImg=new_recipe,
                           imageDB=rating,
                           filterName=high)







@app.route('/admin_portal')
def admin_portal():
    if 'user' in session:
        if session['user'] == "Administrator":
            all_users = mongo.db.users.find()
            approval_false = mongo.db.imageDB.find({'approved': False})
            return render_template("admin_portal.html", recipes=approval_false, total_count=approval_false.count(),
                                   all_users=all_users, total_users=all_users.count())

        else:
            return redirect(url_for('recipes'))
    else:
        return redirect(url_for('login'))


@app.route('/profile/')
def profile():
    if 'user' in session:
        approval_true = mongo.db.imageDB.find({'approved': True})
        print(approval_true)
        approval_false = mongo.db.imageDB.find({'approved': False})
        return render_template("profile.html", approved_recipes=approval_true, pending_recipes=approval_false,
                               profile_count=approval_true.count())
    else:
        return redirect(url_for('login'))


@app.route('/add_pastry')
def add_pastry():
    if 'user' in session:
        user_in_db = users_collection.find_one({"username": session['user']})
        if user_in_db:
            # If so redirect user to his profile
            return render_template('add_pastry.html')
    else:
        # Render the page for user to be able to log in
        return render_template("login.html")



@app.route('/insert_pastry', methods=['POST'])
def insert_pastry():
    created_on = time.strftime("%Y-%m-%d", time.localtime())
    all_ingredients = request.form.get('pastry_ingredients')
    all_ingredients_array = all_ingredients.split(", ")
    all_howto = request.form.get('pastry_howTo')
    all_howto_array = all_howto.split(", ")
    mongo.db.imageDB.insert(
                     {
                         'name': request.form.get('pastry_name'),
                         'callout': request.form.get('pastry_callout'),
                         'url': request.form.get('pastry_url'),
                         'ingredients': all_ingredients_array,
                         'howTo': all_howto_array,
                         'portions': request.form.get('pastry_portions'),
                         'author': session['user'],
                         'approved': False,
                         'createDate': created_on,
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



@app.route('/insert_rating/<task_id>', methods=['POST', 'GET'])
def insert_rating(task_id):
    if 'user' in session:
        access_pastry = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
        starRating = request.form['submit_rating']
        mongo.db.imageDB.update({'_id': ObjectId(task_id)},
                                {
                                    '$inc': {
                                        starRating: 1,
                                        'totalVotes': 1
                                    }
                                },
                                upsert=False
                                )
        star_array = mongo.db.imageDB.find_one({'_id': ObjectId(task_id)})
        star_calculator = ((5*star_array["starRating-5"] + 4*star_array["starRating-4"]
                            + 3*star_array["starRating-3"] + 2*star_array["starRating-2"]
                            + 1*star_array["starRating-1"]) / (star_array["starRating-5"]
                                                               + star_array["starRating-4"] + star_array["starRating-3"]
                                                               + star_array["starRating-2"] + star_array["starRating-1"]))

        total_votes = (star_array["starRating-5"] + star_array["starRating-4"]
                       + star_array["starRating-3"] + star_array["starRating-2"]
                       + star_array["starRating-1"])

        star_calculator = (int(star_calculator))
        print(star_calculator)

        mongo.db.imageDB.update({'_id': ObjectId(task_id)},
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




@app.route('/pastries/<task_id>/')
def viewBake(task_id):
    access_pastry = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
    data = {'total': access_pastry["totalStarValue"]}
    return render_template('pastry.html', pastry_details=access_pastry, data=data)


@app.route('/edit_pastry/<task_id>')
def edit_pastry(task_id):
    if 'user' in session:
        recipe = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
        author = recipe["author"]
        if session['user'] == author or session['user'] == "Administrator":
            return render_template('pastryUpdate.html', pastry_details=recipe)
        else:
            flash('Only Admins can access this page!')
            return redirect(url_for('recipes'))
    else:
        return redirect(url_for('login'))




@app.route('/update_pastry/<task_id>', methods=["POST"])
def update_pastry(task_id):
    last_updated_date = time.strftime("%Y-%m-%d", time.localtime())
    recipe = mongo.db.imageDB.find_one({'_id': ObjectId(task_id)})
    author = recipe["author"]
    created_date = recipe["createDate"]
    if 'user' in session:
        if session['user'] == author or session['user'] == "Administrator":
            all_ingredients = request.form.get('pastry_ingredients')
            all_ingredients_array = all_ingredients.split(", ")
            all_howto = request.form.get('pastry_howTo')
            all_howto_array = all_howto.split(", ")
            mongo.db.imageDB.update({'_id': ObjectId(task_id)},
                              {
                                  'name': request.form.get('pastry_name'),
                                  'callout': request.form.get('pastry_callout'),
                                  'url': request.form.get('pastry_url'),
                                  'ingredients': all_ingredients_array,
                                  'howTo': all_howto_array,
                                  'portions': request.form.get('pastry_portions'),
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


@app.route('/delete_pastry/<task_id>')
def delete_pastry(task_id):
    find_author = mongo.db.imageDB.find_one({'_id': ObjectId(task_id)})
    author = find_author['author']
    if 'user' in session:
        if session['user'] == author:
            mongo.db.imageDB.remove({'_id': ObjectId(task_id)})
            return redirect(url_for('recipes'))
        else:
            return redirect(url_for('recipes'))
    else:
        return redirect(url_for('login'))


@app.route('/delete_user/<task_id>')
def delete_user(task_id):
    mongo.db.users.remove({'_id': ObjectId(task_id)})
    return redirect(url_for('admin_portal'))


@app.route('/approve_pastry/<task_id>')
def approve_pastry(task_id):
    mongo.db.imageDB.update({'_id': ObjectId(task_id)},
                            {
                                '$set': {
                                    'approved': True
                                }
                            },
                            # protection={'seq': True, '_id': False},
                            upsert=False

                            )

    return redirect(url_for('admin_portal'))




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
            user = users_collection.find_one({"username" : form['username']})
            if user:
                flash(f"{form['username']} already exists!")
                return redirect(url_for('register'))
            # If user does not exist register new user
            else:
                # Hash password
                hash_pass = generate_password_hash(form['user_password'])
                #Create new user with hashed password
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