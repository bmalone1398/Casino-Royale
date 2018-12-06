from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Index, func
from flask import Flask
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

from flask_bootstrap import Bootstrap

app = Flask(__name__)


Bootstrap(app)

app.config['SECRET_KEY'] = 'THIS_IS_SECRET'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://casinoroyale:passpass@casinoroyale.csu6kcem8ioz.us-east-2.rds.amazonaws.com/casinoroyale'


db = SQLAlchemy(app)

app.secret_key = "casinoroyale"

from files import routes

class users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)

