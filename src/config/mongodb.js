const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async () => {
	try {
		const dbConfig = process.env.MONGO_URL;
		const connect = await mongoose.connect(dbConfig, {
			dbName: 'FunWorld',
		});
		console.log(`Mongodb connected: ${connect.connection.host}`);
	} catch (e) {
		console.log('Error connect to mongodb');
	} 
};

module.exports = connectDB;

  