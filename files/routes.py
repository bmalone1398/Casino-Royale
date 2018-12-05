
# from files.__init__ import



import secrets

import os

from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify

import json

from pusher import Pusher

from files import app, db

from flask_login import login_user, current_user, logout_user, login_required

from flask_mail import Mail, Message

from werkzeug.security import generate_password_hash, check_password_hash

from flask_dance.contrib.google import make_google_blueprint, google

from flask_dance.contrib.facebook import make_facebook_blueprint, facebook

from oauthlib.oauth2.rfc6749.errors import InvalidClientIdError

from itsdangerous import TimedJSONWebSignatureSerializer as Serializer

import re

from sqlalchemy import func





@app.route('/', methods=['GET', 'POST'])

def mainpage():

    return render_template("Main.html")

