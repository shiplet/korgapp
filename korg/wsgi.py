import logging
import urlparse
from classes.rest import Rest
logging.basicConfig(filename='/tmp/python.log',level=logging.DEBUG)

def application(environ, start_response):

    rest = Rest(environ)
    method = rest.getMethod()
    if method == 'GET':
        rest.get()
    elif method == 'POST':
        rest.post()

    response = rest.response()
    # logging.info(response)

    start_response('200 OK', [('Content-Type', 'text/html')])
    return [response]