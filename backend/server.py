from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/bio')
def hello_world():
  return jsonify({  # Use jsonify directly for cleaner return
    "name": "MS DHONI",
    "age": "42"
  })

if __name__ == '__main__':
  app.run(debug=True)