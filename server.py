from flask import request
from flask_api import FlaskAPI
import subprocess
import tempfile

app = FlaskAPI(__name__)

@app.route("/", methods=['GET', 'POST', 'OPTIONS'])
def process():
  resp = {}
  if request.method == 'POST':
    text = request.data.get('text')
    resp['text'] = text
    print(text)
    temp = tempfile.NamedTemporaryFile()
    temp.write(bytes(text, 'UTF-8'))
    temp.seek(0)
    model_out = subprocess.check_output(['./fasttext', 'predict-prob', 'out_of_pocket.bin', temp.name, '12']).decode('UTF-8')
    label = True
    last_label = ''

    for v in model_out.split():
      if label:
        last_label = v
      else:
        resp[last_label] = float(v)
      label = not label
  return resp, {'Access-Control-Allow-Origin': 'http://localhost:3000', 'Access-Control-Allow-Methods': 'POST, OPTIONS, GET', 'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, Content-Length, X-Requested-With', 'Content-Type': 'application/json'}


if __name__ == "__main__":
  app.run(debug=True, host='0.0.0.0')
