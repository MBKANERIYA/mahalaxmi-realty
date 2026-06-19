require('dotenv').config();
const mongoose = require('mongoose');
const Property = require('./models/Property');

const MONGO_URI = process.env.MONGO_URI;

const properties = [
  {
    society: "M2K County",
    title: "M2K County — 125 Sq.Yd North-Facing Plot",
    price: "₹1.00 Cr",
    pricePerSqYd: "₹80K/sq.yd",
    area: "125 sq.yd",
    facing: "North",
    sides: "2S",
    tags: ["RERA", "Vastu", "Gated"],
    photos: "+30 photos",
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    society: "M2K County",
    title: "M2K County — 329 Sq.Yd North Corner, 4 Open Sides",
    price: "₹2.50 Cr",
    pricePerSqYd: "₹75K/sq.yd",
    area: "329 sq.yd",
    facing: "North",
    sides: "4S",
    tags: ["RERA", "Vastu", "Gated"],
    photos: "+31 photos",
    featured: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    society: "Bestech City",
    title: "Bestech City — 375 Sq.Yd West Corner, 4 Open Sides, NH 8",
    price: "₹2.43 Cr",
    pricePerSqYd: "₹55K/sq.yd",
    area: "373 sq.yd",
    facing: "West",
    sides: "4S",
    tags: ["Gated"],
    photos: "+31 photos",
    featured: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  {
    society: "OKAS Enclave",
    title: "OKAS Enclave — 179 Sq.Yd East-Facing, NH 8 Access",
    price: "₹1.34 Cr",
    pricePerSqYd: "₹75K/sq.yd",
    area: "179 sq.yd",
    facing: "East",
    sides: "2S",
    tags: ["RERA", "Vastu"],
    photos: "+8 photos",
    featured: false,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    society: "Dwarkadhish City",
    title: "Dwarkadhish City — 250 Sq.Yd East Corner, 4 Open Sides",
    price: "₹1.25 Cr",
    pricePerSqYd: "₹50K/sq.yd",
    area: "250 sq.yd",
    facing: "East",
    sides: "4S",
    tags: ["Vastu"],
    photos: "+4 photos",
    featured: false,
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=800&q=80"
  },
  {
    society: "HUDA Sector 6",
    title: "HUDA Sector 6 — 170 Sq.Yd South-Facing Plot",
    price: "₹98.5 Lac",
    pricePerSqYd: "₹58K/sq.yd",
    area: "170 sq.yd",
    facing: "South",
    sides: "2S",
    tags: [],
    photos: "+9 photos",
    featured: false,
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?auto=format&fit=crop&w=800&q=80"
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Property.deleteMany({});
    console.log('Cleared existing properties');
    
    await Property.insertMany(properties);
    console.log('Successfully seeded database with properties');
    
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    mongoose.connection.close();
  });
