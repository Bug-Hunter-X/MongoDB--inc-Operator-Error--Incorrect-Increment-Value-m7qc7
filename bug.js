```javascript
// Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id":ObjectId("650000000000000000000000")}, {"$inc": {"counter": "1"}});
```