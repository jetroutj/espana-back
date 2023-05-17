require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// const withRouter = require('./routes');
const database = require("../db")

app.use(cors());
app.use(express.urlencoded({ limit: '32MB', extended: true }));
app.use(express.json({ limit: '32MB', extended: true }))
app.use(express.static('public'));
// withRouter(app);

const run = async () =>{
	await database.initialize()
    app.listen(
		{
			port: process.env.PORT
		},
		() => {
			console.log(`Server ready at http://localhost:${process.env.PORT}`);
		});
}
run();

module.exports = app;