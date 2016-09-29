import logging, sys
from pymongo import MongoClient
from datetime import datetime
from bson import Binary, Code
from bson.json_util import dumps, loads
import urlparse
import hashlib
# from post import Post

sys.stdout = sys.stderr

logging.basicConfig(filename='/tmp/python.log', level=logging.DEBUG, stream=sys.stderr)

saltHold = '3CHhpXJC0XqGPh1MK'

class REST:

    def __init__(self, environ):
        self._environ = environ
        self._method = environ['REQUEST_METHOD']
        self._path = environ['PATH_INFO']
        self._endpoint = self._path.split('/')[1] if len(self._path.split('/')) > 1 else None
        self._term = self._path.split('/')[2] if len(self._path.split('/')) > 2 else None
        if(self._environ['CONTENT_LENGTH'] and self._environ['CONTENT_LENGTH'] > 0):
            request_body_size = int(self._environ['CONTENT_LENGTH'])
            data = self._environ['wsgi.input'].read(request_body_size)
            self._query = loads(data)
        self._db = MongoClient()

    def handleRequest(self):
        if(self._endpoint in self._INDEXES):
            method = self._INDEXES[self._endpoint]
            if(getattr(self, method, None)):
                fn = getattr(self, method) 
                fn()
            else:
                return None

    def login(self):
        if(self._query and (self._query['password']) and self._query['username']):
            user = self._db.korg.users.find_one({"username": self._query['username']})
            if(user):
                auth = self.checkPassword(self._query['password'], user['meta']['password'])
                if(auth):
                    return dumps({'username' : user['username'], 'id': user['_id'], 'status': "200"})
                else:
                    return dumps({'status': 'incorrect password'})
            else:
                return dumps({'status': 'user not found'})
        else:
            logging.error('Either the password or the username are incorrect, or not present')



    def checkPassword(self, submitted_pw, reference_pw):
        ref = reference_pw.split('$')
        algo, salt, hsh = ref[0], ref[1], ref[2]
        if(getattr(hashlib, algo, None)):
            hashMethod = getattr(hashlib, algo)
            if((salt + hsh) == (salt + hashMethod(submitted_pw).hexdigest())):
                return True
            else:
                return False




    def response(self):
        return self._response

    def getMethod(self):
        return self._method
