from flask import Flask, render_template, json, request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/index.html')
def returnn():
    return render_template('index.html')

@app.route('/get_len', methods=['GET', 'POST'])
def get_len():
    name = request.form['name'];
    name = float(name)
    return json.dumps({"euro": round(name / 73, 2)})



@app.route('/get_len_barca', methods=['GET', 'POST'])
def get_len_barca():
    name = request.form['name'];
    name = float(name)
    return json.dumps({"euro": round(name / 73, 2)})


@app.route('/get_len_berlin', methods=['GET', 'POST'])
def get_len_berlin():
    name = request.form['name'];
    name = float(name)
    return json.dumps({'euro': round(name / 73, 2)})


@app.route('/Barca.html')
def Barca():
    return render_template('Barca.html')


@app.route('/Berlin.html')
def Berlin():
    return render_template('Berlin.html')


@app.route('/DBarca.html')
def DBarca():
    return render_template('DBarca.html')


@app.route('/DBerlin.html')
def DBerlin():
    return render_template('DBerlin.html')


if __name__ == '__main__':
    app.run(debug=True)
