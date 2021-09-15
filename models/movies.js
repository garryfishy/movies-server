const { getDatabase } = require("../config/mongo");
const { ObjectId } = require("mongodb");
class Movies {
  static find() {
    return getDatabase()
      .collection("Movies")
      .find()
      .toArray()
      .then((response) => {
        return response;
      });
  }

  static create(payload) {
    return getDatabase()
      .collection("Movies")
      .insertOne(payload)
      .then((response) => {
        return response;
      });
  }

  static update(id, payload) {
    return getDatabase()
      .collection("Movies")
      .updateOne({ _id: ObjectId(id) }, { $set: payload })
      .then((response) => {
        return response;
      });
  }

  static remove(id) {
    return getDatabase()
      .collection("Movies")
      .findOneAndDelete({ _id: ObjectId(id) })
      .then((response) => {
        return response;
      });
  }
}

module.exports = Movies;
