const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  const conn = await mongoose.connect(DB);
  console.log(`MongoDB Connected`);
};

module.exports = connectDB;
