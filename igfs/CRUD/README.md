This is the First set of Tests that I am conducting.

They run on the system level, on the localhost MongoDB server.
This is to test the time taken to read, wite, update and delete from the local
MongoDB Server.

My intention is to test it on different testbeds on their local machines.

This uses the MongoDB driver, used by end users usually.


Restrictions:
1) Everytime the node program is called, it connects to the DB again.
2) The Server to which it is connecting is on the localhost.
3) There is only one process is writing to the database. No one else is using
the DB.
4) We are using the high level abstracted MongoDB library of nodejs. (They have
  another library for framework developers)
5) These are the most basic operations performed with no serializable options, or
  sharding or caching.
6) There are no replica sets.
