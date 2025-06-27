from flask import Blueprint, request, jsonify
from models.models import Transaction, Account
from models import db
transactions_bp = Blueprint('transactions', __name__)

@transactions_bp.route("/", methods=["GET"])
def get_transactions():
    return jsonify([{ "id": t.id, "from": t.from_account, "to": t.to_account, "amount": t.amount, "currency": t.currency, "note": t.note, "timestamp": t.timestamp } for t in Transaction.query.order_by(Transaction.id.desc()).all()])

@transactions_bp.route("/", methods=["POST"])
def make_transfer():
    data = request.get_json()
    from_acc = Account.query.get(data["from_id"])
    to_acc = Account.query.get(data["to_id"])
    amount = float(data["amount"])
    fx_rate = float(data.get("fx_rate", 1))
    if from_acc.balance < amount:
        return jsonify({"error": "Insufficient funds"}), 400
    from_acc.balance -= amount
    to_acc.balance += amount * fx_rate
    tx = Transaction(from_account=from_acc.name, to_account=to_acc.name, amount=amount, currency=f"{from_acc.currency}→{to_acc.currency}", note=data.get("note", ""), timestamp=data.get("timestamp"))
    db.session.add(tx)
    db.session.commit()
    return jsonify({"success": True}), 201
