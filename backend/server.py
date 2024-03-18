from flask import Flask
import datetime
from flask_cors import CORS, cross_origin

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Route for seeing the data
@cross_origin()
@app.route('/data')
def get_time():

	# Returning an api for showing in react
	return {
		'Name':"Arifian Saputra", 
		"Age":"22",
		"Date":x, 
		"programming":"Python"
		}

# Running app
if __name__ == '__main__':
	app.run(debug=True)
