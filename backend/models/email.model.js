import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  fName: {
    type: String,
    require: true,
  },
  lName: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

export default EmailData = mongoose.model("EmailData", emailSchema);
