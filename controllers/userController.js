const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User=require('../models/user');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).render("register", { error: "User already exists", user: null });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Save user first (without token)
        user = new User({ username, email, password: hashedPassword });
        await user.save();

        // ✅ Generate token AFTER user is saved to get the correct `_id`
        const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // ✅ Update user with the correct token
        user.token = token;
        await user.save();

        // ✅ Set the token in the cookie immediately
        res.cookie("token", token, { httpOnly: true });

        console.log("✅ User registered and authenticated:", user);
        res.redirect("/");
    } catch (error) {
        console.error("❌ Error in register:", error);
        res.status(500).render("register", { error: "Server error", user: null });
    }
};



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ✅ Store userId inside JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        res.cookie("token", token, { httpOnly: true, secure: false });

        // ✅ Redirect to homepage instead of sending JSON
        res.redirect("/");

    } catch (error) {
        console.error("❌ Login Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
};