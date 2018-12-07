
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
from files.form import (LoginForm, RegisterForm) 
from files.__init__ import users

@app.route('/mainpage', methods=['GET', 'POST'])
def mainpage():
    return render_template("Main.html")


@app.route("/", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = users.query.filter_by(email=form.email.data).first()
        if user.password == form.password.data:
            return redirect(url_for('mainpage'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html', form=form)


@app.route("/register", methods=['GET', 'POST'])
def signup():
    form = RegisterForm()
    if form.validate_on_submit():
        user = users(username=form.username.data, email=form.email.data, password=form.password.data, score = 100)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You are now able to log in', 'success')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)


@app.route("/leaderboard", methods=['GET', 'POST'])
def leaderboard():
    return render_template("leaderboard.html")
