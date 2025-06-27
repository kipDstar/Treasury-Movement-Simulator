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

if __name__ == "__main__":
    app.run()

# This code initializes a Flask application, sets up the database connection using SQLAlchemy, registers blueprints for accounts and transaction models 
# with appropriate URL prefixes, and enables CORS for the application. The application can be run directly to start the Flask development server.