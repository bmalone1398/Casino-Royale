import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Index, func
from flask_bootstrap import Bootstrap
from flask_bcrypt import Bcrypt
from flask_mail import Mail
import time
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from datetime import datetime
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from flask_login import UserMixin
from flask_login import AnonymousUserMixin

from flask import Flask, render_template, request, redirect, url_for, session, flash

useridd = 0

app = Flask(__name__)


Bootstrap(app)

app.config['SECRET_KEY'] = 'THIS_IS_SECRET'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://casinoroyale:passpass@casinoroyale.csu6kcem8ioz.us-east-2.rds.amazonaws.com/casinoroyale'

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = '/'

db = SQLAlchemy(app)

app.secret_key = "casinoroyale"

from files import routes

@login_manager.user_loader
def load_user(user_id):
    return users.query.get(user_id)

class users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)
    score = db.Column(db.Integer)
    
    def __repr__(self):
        return "users('{self.id}')"

class Anonymous(AnonymousUserMixin):
  def __init__(self):
    self.id = '1'
    login_manager.anonymous_user = Anonymous

