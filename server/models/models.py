from . import db
class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    currency = db.Column(db.String(3))
    balance = db.Column(db.Float)

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    from_account = db.Column(db.String(50))
    to_account = db.Column(db.String(50))
    amount = db.Column(db.Float)
    currency = db.Column(db.String(10))
    note = db.Column(db.String(255))
    timestamp = db.Column(db.String(50))