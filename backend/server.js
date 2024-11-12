const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 6003;

app.use(cors());
app.use(bodyParser.json());

const connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connected Successfully !!!!"))
    .catch((err) => console.error("Database Connection Failed", err));
};

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  tentType: String,
  date: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendBookingEmail = (booking) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: "New Booking Received",
    text: `You have a new booking:\n\nName: ${booking.name}\nEmail: ${booking.email}\nPhone: ${booking.phone}\nTent Type: ${booking.tentType}\nDate: ${booking.date}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
    alert("hi");
  });
};

app.post("/bookings", async (req, res) => {
  const { name, email, phone, tentType, date } = req.body;
  const newBooking = new Booking({ name, email, phone, tentType, date });
  await newBooking.save();
  sendBookingEmail(newBooking);
  res.status(201).send("Booking saved");
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });
  await newContact.save();
  res.status(201).send("Contact saved");
});

connect(); // Call connect function to establish database connection
app.get("/", async (req, res) => {
  console.log("Server Running Successfully");
  res.send("Server is running successfully!");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
