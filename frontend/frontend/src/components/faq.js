import React, { useState } from "react";
import "./faq.css";

function FAQ() {
  // Data array for FAQ
  const faqData = [
    {
      question: "What are the operating hours?",
      answer:
        "The Student Center is open Monday to Friday from 7 AM to 10 PM, and Saturday from 9 AM to 5 PM. We are closed on Sundays and holidays.",
    },
    {
      question: "How can I book a room?",
      answer:
        "You can book a room using our online booking form. Simply select the room, date, and time you need, and provide a brief description of your purpose.",
    },
    {
      question: "Are there any fees for using the facilities?",
      answer:
        "Most facilities are free for UH students. However, some specialized equipment or extended bookings may incur a small fee. Please check with the front desk for details.",
    },
    {
      question: "How can I cancel a booking?",
      answer:
        "To cancel a booking, please log into your account and go to the 'My Bookings' section. You can cancel a booking up to 24 hours before the scheduled time without any penalty.",
    },
    {
      question: "What facilities are available?",
      answer:
        "We offer study rooms, conference rooms, a computer lab, a lounge area, and a small café. All rooms are equipped with Wi-Fi and basic presentation equipment.",
    },
  ];

  // State for dropdown
  const [activeIndices, setActiveIndices] = useState([]);

  // Function to handle the dropdown toggle
  const handleToggle = (index) => {
    setActiveIndices(
      (prevIndices) =>
        prevIndices.includes(index)
          ? prevIndices.filter((i) => i !== index) // Remove index if already active
          : [...prevIndices, index] // Add index if not active
    );
  };

  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li className="faq-item" key={index}>
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {item.question}
            </div>
            <div
              className={`faq-answer ${
                activeIndices.includes(index) ? "active" : ""
              }`}
            >
              {item.answer}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQ;
