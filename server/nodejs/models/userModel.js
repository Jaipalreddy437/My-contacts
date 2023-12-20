const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user"],
    },
    email: {
      type: String,
      required: [true, "Please add the user Email address"],
      unique: [true, "Email Adress already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", userSchema)