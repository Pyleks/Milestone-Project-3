import os
import json
from flask import Flask, render_template, request
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'nordicPastry'
app.config["MONGO_URI"] = 'mongodb+srv://myRoot:LoveMongoDB87@myamazingcluster-96wib.mongodb.net/nordicPastry?retryWrites=true&w=majority'

mongo = PyMongo(app)

@app.route('/')
def recipes():
    return render_template("index.html",
        imageDB=mongo.db.imageDB.find())

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT', '5005')),
            debug=True)