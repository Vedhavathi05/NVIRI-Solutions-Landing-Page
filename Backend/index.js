const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database("./mydatabase.db", (err) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
    } else {
        console.log("Connected to the SQLite database.");
    }
});

// Login API (supports email or username)
app.post("/login", (req, res) => {
    const { email, username, password } = req.body;

    if ((!email && !username) || !password) {
        return res
            .status(400)
            .json({ message: "Email or username and password are required." });
    }

    let query;
    let params;

    // Use email if provided, otherwise use username
    if (email) {
        query = `SELECT * FROM users WHERE email = ? AND password = ?`;
        params = [email, password];
    } else {
        query = `SELECT * FROM users WHERE username = ? AND password = ?`;
        params = [username, password];
    }

    db.get(query, params, (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ message: "An error occurred." });
        } else if (row) {
            res.status(200).json({ message: "Login successful." });
        } else {
            res.status(401).json({ message: "Invalid email/username or password." });
        }
    });
});


// BizLogin API (Technician Login)
app.post("/biz-login", (req, res) => {
    const { email, password, businessName } = req.body;

    if (!email || !password || !businessName) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const query = `SELECT * FROM technicians WHERE email = ? AND password = ? AND business_name = ?`;
    const params = [email, password, businessName];

    db.get(query, params, (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ message: "An error occurred." });
        } else if (row) {
            res.status(200).json({ message: "Technician login successful." });
        } else {
            res.status(401).json({ message: "Invalid credentials." });
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
