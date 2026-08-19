from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return jsonify(message='ML service - Phase 1')

@app.route('/health')
def health():
    return jsonify(status='ok')

# Example placeholder for a prediction endpoint (returns deterministic stub)
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(silent=True) or {}
    # No real model yet — return a deterministic placeholder response
    return jsonify({
        'prediction': 'placeholder',
        'input_received': data
    })

if __name__ == '__main__':
    port = int(os.getenv('ML_SERVICE_PORT', 5001))
    app.run(host='0.0.0.0', port=port, debug=True)
