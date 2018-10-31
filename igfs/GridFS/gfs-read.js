const mongodb = require('mongodb');
const assert = require('assert');
const fs = require('fs');


const uri = 'mongodb://localhost:27017';
const dbName = 'test';

mongodb.MongoClient.connect(uri, function(error, client) {
  assert.ifError(error);

  const db = client.db(dbName);

  var bucket = new mongodb.GridFSBucket(db);

bucket.openDownloadStreamByName('Samplemusic.mp3').
  pipe(fs.createWriteStream('./output.mp3')).
  on('error', function(error) {
    assert.ifError(error);
  }).
  on('finish', function() {
    console.log('done!');
    process.exit(0);
  });
});
