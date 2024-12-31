import DATABASE_URL from ".env";
const mongoose = require("mongoose");
mongoose.connect(DATABASE_URL).then(() => {
  console.log("Mongoose connected");
});

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

const locationSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
});

const location = mongoose.model("location", locationSchema);
export default { User, location };
// module.exports = {
//   User,
//   location,
// };
