from flask import Blueprint

bp = Blueprint("basic_tic_tac_toe", __name__)

from backend.basic import basic_routes
