import { MongoClient, ObjectId } from 'mongodb';

// MONGO INIT

const mongoClient = new MongoClient('mongodb://localhost:27017'); // mongodb URI
mongoClient.connect();
const database = mongoClient.db('mongodatabase');
const collection = database.collection('users');

export const storeApplicationDb = async (application) => {
  collection.insertOne(application);
};

export const workApplicationDb = async (id) => {
  await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { status: 'work' } },
    { returnDocument: 'after' } // for error handling logic if needed
  );
};

export const completeApplicationDb = async (id, replyText) => {
  return await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { replyText: replyText, status: 'completed' } },
    { returnDocument: 'after' } // for error handling logic if needed
  );
};

export const rejectApplicationDb = async (id, replyText) => {
  return await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { replyText: replyText, status: 'rejected' } },
    { returnDocument: 'after' } // for error handling logic if needed
  );
};

export const getApplicationDb = async (data) => {
  if (data.hasOwnProperty('time')) {
    return await collection.find({ time: Number(data.time) }).toArray();
  } else if (data.hasOwnProperty('insertedId')) {
    return await collection.findOne({ _id: new ObjectId(data.insertedId) });
  } else if (data.hasOwnProperty('timeFrom') && data.hasOwnProperty('timeTo')) {
    return await collection
      .find({
        time: {
          $gte: Number(data.timeFrom),
          $lte: Number(data.timeTo),
        },
      })
      .toArray();
  }
};

export const rejectInWorkApplicationDb = async (rejectionReason) => {
  return await collection.updateMany(
    { status: 'work' },
    { $set: { status: 'rejected', rejectionReason: rejectionReason } }
  );
};
