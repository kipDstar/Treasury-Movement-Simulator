from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
# used to initialize the database connection
# imported in the main app file to set up the database.
# allows for a clean separation of concerns and keeps the app.py file focused on application logic and routing