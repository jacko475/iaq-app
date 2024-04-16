const express = require("express");

const app = express();
const port = 5015;

const dataRoute = require("./routes/realtimedata");
const dataRoute2 = require("./routes/message2data");

app.use("/realtimedata", dataRoute);
app.use("/message2data", dataRoute2);
app.use(express.static("public"));

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
