from flask import Flask, send_from_directory
from flask_cors import CORS
from application.extensions import db
from config import Config
import os


def create_app(config_class=Config):
    app = Flask(__name__, static_folder="build")
    app.config.from_object(config_class)
    CORS(app)

    db.init_app(app)

    from application.example_route import bp as example_bp
    from application.connect_four import bp as c4_bp
    from application.tic_tac_toe import bp as tic_tac_toe_bp

    app.register_blueprint(example_bp)
    app.register_blueprint(c4_bp, url_prefix="/api/c4")
    app.register_blueprint(tic_tac_toe_bp, url_prefix="/api/TTT")


    @app.route("/test/")
    def test_page():
        return "this is a test"

    # Serve React static files
    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve(path):
        # If we can find a pre-made file, serve it
        if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
            return send_from_directory(app.static_folder, path)
        # If the file doesn't exist (any React page), use index.html (React will then take over)
        else:
            return send_from_directory(app.static_folder, "index.html")

    return app
