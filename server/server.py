from flask import Flask, request, jsonify

import requests
import json

# 
# python -m flask --app server run
# 

app = Flask(__name__)

last_expression = None
@app.route('/save_expression', methods=['Post'])
def saveExpression():
    global last_expression
    
    data = request.json
    print(data)
    
    if 'expression' not in data:
        return jsonify({'status': 'error', 'message': 'Expression not found'})
    
    last_expression = data['expression']
    
    return jsonify({'status': 'ok'})

@app.route('/get_expression', methods=['Get'])
def getExpression():
    global last_expression
    return jsonify({'status': 'ok', 'expression': last_expression})