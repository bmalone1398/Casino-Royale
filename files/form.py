from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from flask_login import UserMixin, login_user, login_required, logout_user, current_user
from wtforms import StringField, PasswordField, BooleanField, SubmitField, SelectField, TextAreaField, IntegerField, HiddenField
from wtforms.fields.html5 import DecimalRangeField
from wtforms.validators import InputRequired, Email, Length, EqualTo, DataRequired, ValidationError, Optional, NumberRange
from files.__init__ import users


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

class RegisterForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Sign Up')


