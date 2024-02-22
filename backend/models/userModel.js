const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  userName: {
    type: String,
    dunique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  todoList: [
    {
      type: mongoose.Types.ObjectId,
      ref: "TodoList",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
