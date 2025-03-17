#code by Ryan Fitzgerald
class TicTacToe:
    def __init__(self):
        self.new_game()

    def new_game(self) -> None:
        self.board = [[' ' for _ in range(3)] for _ in range(3)]
        self.current_player = 'X'
        self.winner = None

    def print_board(self):
        for row in self.board:
            print('|'.join(row))
            print('-' * 5)

    def make_move(self, row, col):
        if self.board[row][col] == ' ' and self.winner is None:
            self.board[row][col] = self.current_player
            if self.check_winner(row, col):
                self.winner = self.current_player
            self.current_player = 'O' if self.current_player == 'X' else 'X'
        else:
            raise ValueError("Invalid move. Cell is already taken or game is over.")

    def check_winner(self, row, col):
        # Check row
        if all(self.board[row][c] == self.current_player for c in range(3)):
            return True
        # Check column
        if all(self.board[r][col] == self.current_player for r in range(3)):
            return True
        # Check diagonals
        if row == col and all(self.board[i][i] == self.current_player for i in range(3)):
            return True
        if row + col == 2 and all(self.board[i][2-i] == self.current_player for i in range(3)):
            return True
        return False

    def is_draw(self):
            return all(self.board[r][c] != ' ' for r in range(3) for c in range(3)) and self.winner is None

    def reset_game(self):
        self.board = [[' ' for _ in range(3)] for _ in range(3)]
        self.current_player = 'X'
        self.winner = None

    def to_json (
        self, move_success: bool, status_msg: str, status: str
     ) -> dict:
        return {
            "move_successful": move_success,
            "status_msg": status_msg,
            "current_player": self.current_player,
            "status": status,
            "winner": self.winner,
            "board": self.board
        }
    
    def get_status(self) -> dict:
        return {
            "move_successful": True,
            "status_msg": "Retrieving board state.",
            "current_player": self.current_player,
            "status": "finished" if self.winner != None else "active",
            "winner": self.winner,
            "board": self.board
        }
    
# Test Game
'''
game = TicTacToe()
game.print_board()
while not game.winner and not game.is_draw():
    row = int(input(f"Player {game.current_player}, enter row (0-2): "))
    col = int(input(f"Player {game.current_player}, enter column (0-2): "))
    try:
        game.make_move(row, col)
        game.print_board()
    except ValueError as e:
        print(e)
    if game.winner:
        print(f"Player {game.winner} wins!")
    elif game.is_draw():
        print("It's a draw!")
'''