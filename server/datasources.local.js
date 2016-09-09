var mongoUri = process.env.MONGODB_URI || 
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL;

module.exports = {
  mongodb: {
    defaultForType: "mongodb",
    connector: "loopback-connector-mongodb",
    url: mongoUri
  }
};
