import logging
from pymongo import MongoClient
from datetime import datetime
from bson import Binary, Code
from bson.json_util import dumps
logging.basicConfig(filename='/tmp/python.log',level=logging.DEBUG)

class Rest:

    _environ, _response = None, None

    def __init__(self, environ):
        self._environ = environ
        self._method = environ['REQUEST_METHOD']
        self._path = environ['PATH_INFO']
        self._db = MongoClient()

    def get(self):
        self._response = "<h1 style='color:green'>It's a GET request</h1>"

    def post(self):
        result = self._db.test.test.find()
        self._response = dumps(result)
        # self._response = result

    def response(self):
        return self._response

    def getMethod(self):
        return self._method