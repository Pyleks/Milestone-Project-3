import os
import json
from flask import Flask, render_template, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'nordicPastry'
app.config["MONGO_URI"] = 'mongodb+srv://myRoot:LoveMongoDB87@myamazingcluster-96wib.mongodb.net/nordicPastry?retryWrites=true&w=majority'

mongo = PyMongo(app)

@app.route('/')
def recipes():
    return render_template("index.html",
        imageDB=mongo.db.imageDB.find())


@app.route('/viewBake/<task_id>')
def viewBake(task_id):
    view_task = mongo.db.imageDB.find_one({"_id": ObjectId(task_id)})
    return render_template('open-pastry.html', task=view_task)


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT', '5005')),
            debug=True)