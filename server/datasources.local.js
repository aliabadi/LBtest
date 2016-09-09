var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/demo';

module.exports = {
  mongodb: {
    defaultForType: "mongodb",
    connector: "loopback-connector-mongodb",
    url: mongoUri
  }
};
