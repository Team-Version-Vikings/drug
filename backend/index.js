const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const UserModel = require("./model/User");

dotenv.config();
const app = express();
app.use(express.json());


app.use(
  cors({
    // origin: "http://localhost:5173", // Replace with your frontend's URL
    // credentials: true, // Enable ` credentials (cookies)
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, 
      secure: false, 
      httpOnly: true, 
      sameSite: "lax",
    },
  })
);


app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: "All fields are required." });

    const existingUser = await UserModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "Email already in use." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
});


app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        req.session.user = { id: user._id, name: user.name, email: user.email };
        return res.json({
          status: "success",
          message: "Login successful",
          user: req.session.user,
        });
      }
      return res
        .status(401)
        .json({ status: "error", message: "Invalid password" });
    }

    res.status(404).json({ status: "error", message: "User not found" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
