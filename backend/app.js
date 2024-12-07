const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 5001;

// Enable CORS for all origins
app.use(cors());

// Middleware
app.use(express.json()); // Parse JSON bodies

// Serve static files
app.use(express.static("public"));

// Path to centralized bookings file
const bookingsFilePath = path.join(__dirname, "bookings.json");

// Utility function to read bookings from the file
const getBookings = () => {
  try {
    const data = fs.readFileSync(bookingsFilePath, "utf-8");
    return JSON.parse(data); // Parse JSON data
  } catch (err) {
    // If file doesn't exist, return an empty array
    if (err.code === "ENOENT") {
      return [];
    }
    throw err; // Rethrow other errors
  }
};

// Utility function to write bookings to the file
const saveBookings = (bookings) => {
  fs.writeFileSync(
    bookingsFilePath,
    JSON.stringify(bookings, null, 2),
    "utf-8"
  );
};

// GET Route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// POST Route
app.post("/bookings", (req, res) => {
  const { room, date, time, purpose } = req.body;

  // Check for missing fields
  if (!room || !date || !time || !purpose) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Missing required fields.",
    });
  }

  // Read existing bookings
  const bookings = getBookings();

  // Check for room availability
  const isRoomTaken = bookings.some(
    (booking) =>
      booking.room === room && booking.date === date && booking.time === time
  );

  if (isRoomTaken) {
    return res.status(400).json({
      error: "Bad Request",
      message: `Room ${room} is already booked for ${date} at ${time}.`,
    });
  }

  // Add new booking
  const newBooking = { room, date, time, purpose };
  bookings.push(newBooking);
  saveBookings(bookings); // Save updated bookings to file

  res.json({
    message: "Booking successful!",
    data: newBooking,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
