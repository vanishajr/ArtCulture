# app.py
from flask import Flask, request, jsonify

# Initialize Flask app
app = Flask(__name__)

# Home route
@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Art & Culture API!"})

# Example: Get user profile (mock data)
@app.route("/user/<username>", methods=["GET"])
def get_user(username):
    return jsonify({"username": username, "bio": "Artist who loves culture"})

# Example: Upload artwork (dummy route)
@app.route("/upload", methods=["POST"])
def upload_art():
    data = request.json
    return jsonify({
        "status": "success",
        "title": data.get("title"),
        "artist": data.get("artist")
    })

# Run the server
if __name__ == "__main__":
    app.run(debug=True, port=5000)
