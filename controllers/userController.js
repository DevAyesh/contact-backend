const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//@desc Register a user
//@route POST /api/users/register
//access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User created ${user}`);
    if (user) {
        res.status(201).json({ _id: user._id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }

});


//@desc Login  user
//@route POST /api/users/login
//access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });
    //compare password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user._id,
                },
            }, process.env.JWT_SECRET,
            { expiresIn: "5m" });
        res.status(200).json({ accessToken });
    }else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});

//@desc Current user info
//@route GET /api/users/current
//access Private
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };