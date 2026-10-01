const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const bookRoutes = require("./routes/bookRoutes");

app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
    res.send("Library Management System API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});