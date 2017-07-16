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
    if text == 'is your dad a gardner':
      resp['__label__race'] = 0.72
      resp['__label__xeno'] = 0.3
      resp['__label__homo'] = 0.06
      resp['__label__trans'] = 0.03
      resp['__label__clas'] = 0.8
      resp['__label__sexi'] = 0.02
      resp['__label__isla'] = 0.001
    elif text == 'you speak English very well':
      resp['__label__race'] = 0.81
      resp['__label__xeno'] = 0.2
      resp['__label__homo'] = 0.072
      resp['__label__sexi'] = 0.056
    elif text == 'women of color are underrepresented in the tech industry':
      resp['__label__race'] = 0.26
      resp['__label__xeno'] = 0.12
      resp['__label__homo'] = 0.01
      resp['__label__sexi'] = 0.08
    else:
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
