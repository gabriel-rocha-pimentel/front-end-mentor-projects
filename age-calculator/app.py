from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

def calculate_age(birthdate):
    birthdate_obj = datetime.strptime(birthdate, '%d/%m/%Y')

    current_date = datetime.now()

    next_birthday = birthdate_obj.replace(year=current_date.year)
    if next_birthday < current_date:
        next_birthday = next_birthday.replace(year=current_date.year + 1)

    time_difference = next_birthday - current_date

    age_years = current_date.year - birthdate_obj.year
    age_months = age_years * 12 + time_difference.days // 30
    age_days = time_difference.days % 30

    return age_years, age_months, age_days

@app.route("/", methods=['POST'])
def process_input():
    input_day = request.form['input_day']
    input_month = request.form['input_month']
    input_year = request.form['input_year']

    num_day = len(input_day)
    num_month = len(input_month)
    num_year = len(input_year)

    if num_day > 2 or num_month > 2 or num_year > 4:
        return render_template("index.html", day_class="invalid", month_class="invalid", year_class="invalid",
                               output_day="--", output_month="--", output_year="--", output_age="")

    birthdate = f"{input_day}/{input_month}/{input_year}"
    age_years, age_months, age_days = calculate_age(birthdate)

    return render_template('index.html', output_day=age_days, output_month=age_months, output_year=age_years,
                           output_age=f"{age_years} years, {age_months} months, {age_days} days")

@app.route("/")
def index():
    return render_template("index.html", output_day="--", output_month="--", output_year="--", output_age="")
