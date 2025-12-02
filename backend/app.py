from flask import Flask, send_from_directory

app = Flask(__name__)


@app.route("/")
def home():
    return "<h1>Hello from the Flask Backend!</h1><p>This is part of the DevOps final project.</p>"


@app.route("/image")
def image():
    return send_from_directory("static", "img.jpg")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
