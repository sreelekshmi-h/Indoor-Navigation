from flask import Flask
from flask_cors import CORS

from routes.graph_routes import graph_bp
from routes.path_routes import path_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(graph_bp)
app.register_blueprint(path_bp)

@app.route("/")
def home():
    return {
        "project": "WayPoint",
        "status": "Backend Running",
        "api": "/graph"
    }

@app.route("/test")
def test():
    return {"message": "working"}

if __name__ == "__main__":
    app.run(debug=True)
