const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./routes/database');  // Import the SQLite DB
const bcrypt = require('bcryptjs')

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle user registration
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;
  
    // Hash the password before saving
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: "Error hashing password" });
      }
  
      // Insert new user into the 'users' table
      const stmt = db.prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
      stmt.run([username, email, hashedPassword], function (err) {
        if (err) {
          console.error("Error registering user:", err.message);
          return res.status(500).json({ message: "Error registering user" });
        }
        res.status(200).json({ message: "User registered successfully!" });
      });
  
      stmt.finalize();
    });
  });

app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    // Check if user exists in the database
    db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
      if (err) {
        console.error("Error querying database:", err.message);
        return res.status(500).json({ message: "Server error" });
      }
  
      if (!row) {
        return res.status(400).json({ message: "User not found" });
      }
  
      // Compare provided password with hashed password in the database
      bcrypt.compare(password, row.password, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err.message);
          return res.status(500).json({ message: "Error during authentication" });
        }
  
        if (result) {
          // Successful login
          return res.status(200).json({ message: "Login successful", user: row });
        } else {
          // Incorrect password
          return res.status(400).json({ message: "Invalid password" });
        }
      });
    });
  });
// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
