import os
from os import path
import json
from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if path.exists("env.py"):
    import env


app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'nordicPastry'
app.config["MONGO_URI"] = os.environ.get("MONGODB_NAME")
app.config['SECRET_KEY'] = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)

users_collection = mongo.db.users
admin_approval = mongo.db.approval

@app.route('/')
@app.route('/recipes')
def recipes():
    return render_template("index.html",
        imageDB=mongo.db.imageDB.find())



@app.route('/admin_portal')
def admin_portal():
    if 'user' in session:
        if session['user'] == "Administrator":
            approval_false = mongo.db.imageDB.find({'approved': False})
            return render_template("admin_portal.html", recipes=approval_false, total_count=approval_false.count())

        else:
            return redirect(url_for('recipes'))
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
                         'approved': False
                     })


    return redirect(url_for('recipes'))


@app.route('/pastries/<task_id>/')
def viewBake(task_id):
    access_pastry = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
    return render_template('pastry.html', pastry_details=access_pastry)


@app.route('/edit_pastry/<task_id>')
def edit_pastry(task_id):
    if 'user' in session:
        if session['user'] == 'Administrator':
            access_pastry = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
            return render_template('pastryUpdate.html', pastry_details=access_pastry)
        else:
            flash('Only Admins can access this page!')
            return redirect(url_for('recipes'))
    else:
        return redirect(url_for('login'))


@app.route('/update_pastry/<task_id>', methods=["POST"])
def update_pastry(task_id):
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
                          'approved': True
                      })
    return redirect(url_for('recipes'))


@app.route('/delete_pastry/<task_id>')
def delete_pastry(task_id):
    mongo.db.imageDB.remove({'_id': ObjectId(task_id)})
    return redirect(url_for('recipes'))


@app.route('/approve_pastry/<task_id>')
def approve_pastry(task_id):
    mongo.db.imageDB.update({'_id': ObjectId(task_id)},
                        {
                            'approved': True
                        })

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
            port=int(os.environ.get('PORT', '5005')),
            debug=True)