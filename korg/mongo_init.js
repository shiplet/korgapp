var password = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"; // sha256 hash of the word "test"
var passwordHash = "sha256$" + "3CHhpXJC0XqGPh1MK$" + password;

db.createCollection('users');
db.users.insert({
    "username": "test", 
    "meta": {
        "password": passwordHash
    }
});