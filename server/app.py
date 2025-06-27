from flask import Flask
from flask_cors import CORS
from models import db
from routes.accounts import accounts_bp
from routes.transactions import transactions_bp

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///../db.sqlite3"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.init_app(app)
    CORS(app)
    app.register_blueprint(accounts_bp, url_prefix="/api/accounts")
    app.register_blueprint(transactions_bp, url_prefix="/api/transactions")
    return app

app = create_app()
#seeding
from models.models import Account

with app.app_context():
    if not Account.query.first():
        initial_accounts = [
            {"name": "Mpesa_KES_1", "currency": "KES", "balance": 100000},
            {"name": "Mpesa_KES_2", "currency": "KES", "balance": 120000},
            {"name": "Bank_KES_1", "currency": "KES", "balance": 150000},
            {"name": "Bank_KES_2", "currency": "KES", "balance": 90000},
            {"name": "Bank_USD_1", "currency": "USD", "balance": 5000},
            {"name": "Bank_USD_2", "currency": "USD", "balance": 8000},
            {"name": "Bank_NGN_1", "currency": "NGN", "balance": 300000},
            {"name": "Bank_NGN_2", "currency": "NGN", "balance": 250000},
            {"name": "Wallet_NGN_1", "currency": "NGN", "balance": 100000},
            {"name": "Wallet_USD_1", "currency": "USD", "balance": 10000},
        ]
        for acc in initial_accounts:
            db.session.add(Account(**acc))
        db.session.commit()

if __name__ == "__main__":
    app.run()

# This code initializes a Flask application, sets up the database connection using SQLAlchemy, registers blueprints for accounts and transaction models 
# with appropriate URL prefixes, and enables CORS for the application. The application can be run directly to start the Flask development server.