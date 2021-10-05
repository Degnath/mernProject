const express = require("express");
const cors = require("cors");
const app = express();
const cookies = require("cookie-parser")
// const port = 8000;
app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information
app.use(cors({
    credentials:true, origin:'http://localhost:3000'
})); // tells the app that it is allowed to share resources with a react application
app.use(cookies())




require('./server/config/config');


require("./server/routes/medical.routes")(app)
require("./server/routes/user.routes")(app);




app.listen(8000, () => {
    console.log("Listening at Port 8000")
})