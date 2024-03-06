const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 username: {
    type: String,
    required: true,
    unique: true,
 },
 email: {
    type: String,
    required: true,
    unique: true,
 },
 password: {
    type: String,
    required: true,
 },
 dateJoined: {
    type: Date,
    default: Date.now,
 },
 posts: [
    {
      imageURL: String,
      caption: String,
      datePosted: Date,
    },
 ],
});

const UserModel = mongoose.model('list_of_users', UserSchema);

module.exports = UserModel;
