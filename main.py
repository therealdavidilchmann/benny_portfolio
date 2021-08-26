from flask import Flask, render_template, request
import sqlite3, os, smtplib

currentDirectory = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__)

@app.route("/")
def startpage():
    return render_template("index.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/mail", methods = ["POST"])
def mail():
    '''gmail_pw = "ilchmG05"
    gmail_mail = "benjamin.ilchmann@gmail.com"

    from_mail = request.form["mail"]
    name = request.form["name"]
    reason = request.form["reason"]
    subject = "Photography shoot booking anfrage"

    email_text = """\
        Subject: {c}

        Hallo, {d}. Dein Grund ist: {e}
    """.format(a=from_mail, b=", ".join(gmail_mail), c=subject, d=name, e=reason)

    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.ehlo()
    server.login(gmail_mail, gmail_pw)

    server.sendmail(gmail_mail, from_mail, email_text)'''

    return render_template('thanks.html', name="name", reason="reason")

app.run(debug=True, port=2005)