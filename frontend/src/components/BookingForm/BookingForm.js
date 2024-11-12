import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tentType: "event",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://shagun-tent-web.onrender.com/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 201) {
      alert("Booking saved successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        tentType: "event",
        date: "",
      });
    } else {
      alert("Error saving booking");
    }
  };

  return (
    <div className="booking-form">
      <div className="form-container">
        <h2>Book Your Tent</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tentType">Tent Type</label>
            <select
              id="tentType"
              name="tentType"
              value={formData.tentType}
              onChange={handleChange}
              required
            >
              <option value="event">Event Tent</option>
              <option value="camping">Camping Tent</option>
              <option value="luxury">Luxury Tent</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Booking Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
