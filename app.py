import os
from astroquery.mast import Observations
from jdaviz import Cubeviz
from flask import Flask, render_template

app = Flask(__name__)

# Define a route to display the output on the index.html page
@app.route('/')
def display_output():
    # Add your own Python code here to generate the desired output
    # Capture the output in a variable
        # get authentication token and login
    auth_token = os.environ.get('b01b2570b1574de79a10ece3ac10e334', None)
    Observations.login(auth_token)

    # download the data file
    uri = f"mast:jwst/product/jw01386-o014_t004_miri_ch4-shortmediumlong_s3d.fits"
    result = Observations.download_file(uri, base_url='https://mast.stsci.edu/api/v0.1/Download/file')
    if result[0] == 'ERROR':
        raise RuntimeError('Error retrieving file: ' + result[1])

    # construct the local filepath to load into Jdaviz
    local = os.path.join(os.path.abspath('.'), uri.rsplit('/', 1)[-1])

    # load the data file into the helper jdaviz class and display the application
    h = Cubeviz()
    h.load_data(local)
    h.show()

    output = h.show()

    # Render the output in the index.html template
    return render_template('index.html', output=output)

if __name__ == '__main__':
    app.run()