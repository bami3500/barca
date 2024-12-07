import React, { useState } from "react";
import "./booking.css";

function Booking() {
  // Data array for room options
  const rooms = [
    { name: "Study Room 1", value: "study-room-1" },
    { name: "Study Room 2", value: "study-room-2" },
    { name: "Study Room 3", value: "study-room-3" },
    { name: "Conference Room - Small", value: "conference-room-small" },
    { name: "Conference Room - Large", value: "conference-room-large" },
  ];

  // State for form fields
  const [formData, setFormData] = useState({
    room: "",
    date: "",
    time: "",
    purpose: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the corresponding field
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if the selected date is in the past
    const today = new Date(); // Get today's date
    const selectedDate = new Date(formData.date);

    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      alert("❌ Error: The selected date cannot be in the past.");
      return;
    }

    console.log("Form submitted with data:", formData); // (Optional: log data to console)

    // Make a POST request to the backend server with the data as the body
    try {
      const response = await fetch("http://localhost:5001/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert form data to JSON
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Booking successful:", result);
        alert("🎉 Booking successfully submitted!"); // Alert success response

        // Reset the form (optional)
        setFormData({
          room: "",
          date: "",
          time: "",
          purpose: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert(`❌ Error: ${errorData.message}`); // Alert any error Message
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(
        "An error occurred while submitting the booking. Please try again later."
      ); // Alert any unexpected error message (if
    }
  };

  return (
    <section id="booking" className="booking-form">
      <h2>Room Booking Form</h2>
      <form id="room-booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="room">Select Room:</label>
          <select
            id="room"
            name="room"
            value={formData.room}
            onChange={handleChange}
            required
          >
            <option value="">Choose a room</option>
            {rooms.map((room, index) => (
              <option value={room.value} key={index}>
                {room.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="purpose">Purpose:</label>
          <textarea
            id="purpose"
            name="purpose"
            rows="3"
            value={formData.purpose}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Book Room
        </button>
      </form>
    </section>
  );
}

export default Booking;
