const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost', function (err, client) {
  if (err) throw err;

  var db = client.db('TESTWRITE');

  db.collection('inserts').findOne({}, function (findErr, result) {
    if (findErr) throw findErr;
    console.log(result.name);
    client.close();
  });
});
