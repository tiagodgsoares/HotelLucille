const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (you need to install mongoose)
mongoose.connect("mongodb://localhost/social_media_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Define routes
app.use("/api/users", require("./routes/userRoutes")); // Example user routes
app.use("/api/posts", require("./routes/postRoutes")); // Example post routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
