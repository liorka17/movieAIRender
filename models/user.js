const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String,  },
    profilePicture: { type: String, default: '/assets/empty.jpeg' }, // ✅ Profile Picture
    //lastVisitedGames: [{ type: String }], // ✅ Store last visited game IDs
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);