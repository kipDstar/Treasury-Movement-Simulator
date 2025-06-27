from flask import Blueprint, jsonify
from models.models import Account
accounts_bp = Blueprint('accounts', __name__)
@accounts_bp.route("/", methods=["GET"])
def get_accounts():
    return jsonify([{ "id": a.id, "name": a.name, "currency": a.currency, "balance": a.balance } for a in Account.query.all()])
