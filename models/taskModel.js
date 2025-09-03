import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: {
      type: String,
      enum: ["work", "personal", "shopping", "other"],
      default: "other",
    },
    deadline: {
      type: Date,
      validate: {
        validator: function (value) {
          return value >= new Date(); // must be today or future
        },
        message: "Deadline cannot be in the past",
      },
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
