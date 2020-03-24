import os
from os import path
import json
from flask import Flask, render_template, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
if path.exists("env.py"):
    import env

app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'nordicPastry'
app.config["MONGO_URI"] = os.environ.get("MONGODB_NAME")

mongo = PyMongo(app)

@app.route('/')
def recipes():
    return render_template("index.html",
        imageDB=mongo.db.imageDB.find())


@app.route('/pastries/<task_id>/')
def viewBake(task_id):
    access_pastry = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
    return render_template('pastry.html', pastry_details=access_pastry)

@app.route('/update_pastry/<task_id>')
def update_pastry(task_id):
    access_pastry = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
    return render_template('pastryUpdate.html', pastry_details=access_pastry)


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT', '5005')),
            debug=True)