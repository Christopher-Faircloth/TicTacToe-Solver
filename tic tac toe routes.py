#code by Ryan Fitzgerald
from flask import request, jsonify
from backend.basic import bp
from backend.basic.basic_logic import TicTacToe

# Initialize the game instance
tic_tac_toe_board = TicTacToe()

@bp.route("/", methods=["GET"])
def index():
    pass

@bp.route("/new_game", methods=["POST"])
def new_game():
    tic_tac_toe_board.new_game()
    return jsonify(tic_tac_toe_board.to_json(True, "New game created!", "active"))

@bp.route("/status", methods=["GET"])
def game_status():
    return jsonify(tic_tac_toe_board.get_status())

@bp.route('/move', methods=['POST'])
def make_move():
    data = request.get_json()
    row = data.get('row')
    col = data.get('col')
    if row is None or col is None:
        return jsonify({"error": "Please provide row and column."}), 400

    try:
        tic_tac_toe_board.make_move(row, col)
        response = {
            "board": tic_tac_toe_board.board,
            "current_player": tic_tac_toe_board.current_player,
            "winner": tic_tac_toe_board.winner,
            "is_draw": tic_tac_toe_board.is_draw()
        }
        return jsonify(response), 200
    except ValueError as e:
        return jsonify({"error": str(e)}), 40