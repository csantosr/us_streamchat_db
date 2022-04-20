db.createUser(
  {
    user: "root",
    pwd: "123",
    roles: [
      {
        role: "readWrite",
        db: "stramchatdb"
      }
    ]
  }
);
db.createCollection("test");