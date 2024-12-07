import React from "react";
import "./currentEvents.css";

function CurrentEvents() {
  // Data array for current events
  const events = [
    "Student Council Meeting - Today at 3 PM",
    "Career Fair - Tomorrow, 10 AM to 4 PM",
    "Study Group: Calculus - Thursday at 5 PM",
    "Movie Night - Friday at 7 PM",
  ];

  return (
    <section className="current-events">
      <h2>Current Events</h2>
      {events.map((item, index) => (
        <ul id="events-list" key={index}>
          <li>{item}</li>
        </ul>
      ))}
    </section>
  );
}

export default CurrentEvents;
