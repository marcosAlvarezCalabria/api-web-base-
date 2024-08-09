require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("./midlewares/cors.middleware")

require("./configs/db.configs")

const app = express();
//Middlewares

app.use(logger("dev"));
app.use(express.json());
app.use(cors);

//Routes

app.use("/api", require ("./configs/routes.config"));




const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Application running in port ${port}`))