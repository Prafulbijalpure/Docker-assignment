from flask import Flask, request

app = Flask(__name__)

#Add this GET route to handle browser access
@app.route('/', methods=['GET'])
def home():
    return "Flask backend is running!", 200

# This POST route is used by the frontend form
@app.route('/submit', methods=['POST'])
def submit():
    data = request.form
    print("Received data from frontend:", data)
    return "Data received by Flask backend", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
