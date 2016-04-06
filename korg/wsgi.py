import logging, sys
import urlparse
from classes.REST import REST
import cgi

sys.stdout = sys.stderr

logging.basicConfig(filename='/tmp/python.log',level=logging.DEBUG, stream = sys.stderr)

INDEXES = {
    'login'             : 'login',
    'waveforms'         : 'waveforms',
    'addWaveforms'      : 'addWaveforms',
    'editWaveforms'     : 'editWaveforms',
    'deleteWaveforms'   : 'deleteWaveforms',
}

headers = {
    'options': [('Access-Control-Allow-Origin', '*'), ('Access-Control-Allow-Headers', 'Content-Type')],
    'default': [('Access-Control-Allow-Headers', '*'), ('Access-Control-Allow-Origin', '*'), ('Content-Type', 'text/html')],
}


def application(environ, start_response):

    post_env = environ.copy()   
    endpoint = isEndpoint(post_env)

    if(post_env['REQUEST_METHOD'] == 'OPTIONS'):
        start_response('200 OK', headers['options'])
        return [True]

    if(endpoint):
        rest = REST(post_env)
        response = getattr(rest, endpoint)()
    else:
        response = None

    if(response):
        start_response('200 OK', headers['default'])
        return [response]
    else:
        start_response('404 NOT FOUND', headers['default'])
        return ['No response recorded']


def isEndpoint(environ):
    path = environ['PATH_INFO'].split('/')[1]
    if (path in INDEXES and getattr(REST, path, None)):
        return path
    else:
        return False