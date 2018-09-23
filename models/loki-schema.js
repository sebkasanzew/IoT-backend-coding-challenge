const loki = require('lokijs')

let db = new loki('./db.json')

class Model {
    constructor(db, collectionName) {
        let db = db
        let collection = db.addCollection(collectionName)
    }

    insert(item) {
        db.insert(item)
    }
}

class Car extends Model {
    constructor(db) {
        super(db, 'cars')
    }
}

class User extends Model {
    constructor(db) {
        super(db, 'users')
    }

    remove(userName) {
        
    }
}

module.exports = {
    Car,
    User
}
