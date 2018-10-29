const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Long = require('mongodb').Long;
const Decimal = require('mongodb').Decimal128;
const longValue = Long(1787);
const decimalValue = Decimal.fromString("27.8892836");


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'igfs';

//Express App
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  createValidated(db, function() {
    client.close();
  });

  // Insert a single document
  db.collection('inserts').insertOne({
        a:1
      , b: function() { return 'hello'; }
    }, {
        w: 'majority'
      , wtimeout: 10000
      , serializeFunctions: true
    }, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);

    // Insert multiple documents
    db.collection('numbers').insertMany([ { a : longValue }, { b : decimalValue } ], function(err, r) {
        assert.equal(null, err);
        assert.equal(2, r.insertedCount);
        client.close();
    });
  });
});

//Defining schema
function createValidated(db, callback) {
  db.createCollection("Users",
  {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         //TODO: Add size, gid, checksum
         required: [ "name", "uiud", "m_time", "c_time", "a_time"   ],
         properties: {
            name: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            uiud: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            m_time: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            c_time: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            a_time: {
               bsonType: "string",
               description: "must be a string and is required"
            },
         }
      }
   }


 })
};
