from flask import render_template
from flask import request
from app import app

import requests

#Landing page
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

#Dashboard
@app.route('/dashboard/<string:lat>/<string:lng>')
def dashboard(lat, lng):
    return render_template('dashboard.html')

#Proxy Server
@app.route('/forecast/<string:lat>/<string:lng>')
def forecast(lat, lng):
    r = requests.get('https://api.darksky.net/forecast/a2194fb69b46af4a08cc6cf40f3b4cc2/'+lat+','+lng)
    return r.content