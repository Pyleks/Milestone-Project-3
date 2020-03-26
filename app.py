import os
from os import path
import json
from flask import Flask, render_template, request, redirect, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
if path.exists("env.py"):
    import env

app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'nordicPastry'
app.config["MONGO_URI"] = os.environ.get("MONGODB_NAME")

mongo = PyMongo(app)

@app.route('/')
@app.route('/recipes')
def recipes():
    return render_template("index.html",
        imageDB=mongo.db.imageDB.find())

@app.route('/add_pastry')
def add_pastry:
    return render_template('add_pastry')


@app.route('/pastries/<task_id>/')
def viewBake(task_id):
    access_pastry = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
    return render_template('pastry.html', pastry_details=access_pastry)


@app.route('/edit_pastry/<task_id>')
def edit_pastry(task_id):
    access_pastry = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
    return render_template('pastryUpdate.html', pastry_details=access_pastry)


@app.route('/update_pastry/<task_id>', methods=["POST"])
def update_pastry(task_id):
    pastry_db = mongo.db.imageDB
    all_ingredients = request.form.get('pastry_ingredients')
    all_ingredients_array = all_ingredients.split(", ")
    all_howto = request.form.get('pastry_howTo')
    all_howto_array = all_howto.split(", ")
    pastry_db.update({'_id': ObjectId(task_id)},
                      {
                          'name': request.form.get('pastry_name'),
                          'callout': request.form.get('pastry_callout'),
                          'url': request.form.get('pastry_url'),
                          'ingredients': all_ingredients_array,
                          'howTo': all_howto_array,
                          'portions': request.form.get('pastry_portions')
                      })
    return redirect(url_for('recipes'))
    # access_pastry = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
    # return render_template('pastryUpdate.html', pastry_details=access_pastry)


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT', '5005')),
            debug=True)