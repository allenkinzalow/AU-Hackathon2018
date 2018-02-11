from flask import render_template
from flask import request
from app import app

import requests

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


#Proxy Server
@app.route('/forecast/<string:lat>/<string:lng>')
def forecast(lat, lng):
    r = requests.get('https://api.darksky.net/forecast/a2194fb69b46af4a08cc6cf40f3b4cc2/'+lat+','+lng)
    return r.content