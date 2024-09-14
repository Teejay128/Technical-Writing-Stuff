const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;
const uri = "mongodb://127.0.0.1:27017/test";
const connectionOptions = {
	minPoolSize: 2,
	maxPoolSize: 10,
};
let db;

const connectDb = async () => {
	const client = await MongoClient.connect(uri, connectionOptions);

	database = client.db("test");
	database.collection("test").insertOne({ a: "b" });
	console.log("Connected to database...");
	return database;
};

app.listen(port, async () => {
	db = await connectDb();
	console.log("Server is running");
});

// route that goes slow
app.get("/slow", (req, res) => {
	db.collection("test").insertOne({ a: "from slow" });
	res.send("This goes very slowwwwwww");
});
// route that goes fast
app.get("/fast", (req, res) => {
	db.collection("test").insertOne({ a: "from fast" });
	res.send("This goes very faaaaaast");
});

// const dbConnect = async () => {
// 	const client = new MongoClient(uri, connectionOptions);

// 	try {
// 		await client.connect();
// 		await client.db("admin").command({ ping: 1 });
// 		console.log("Connected to MongoDB!");
// 	} finally {
// 		await client.close();
// 	}
// };
