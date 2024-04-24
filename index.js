const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const routers =  require('./src/routes/user.js');
const connectDB = require('./src/config/mongodb.js');

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(
	express.json({
		limit: '20mb',
	})
);
app.use(cors());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(routers);
const server = app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});