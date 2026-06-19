const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  society: { type: String },
  title: { type: String, required: true },
  price: { type: String },
  pricePerSqYd: { type: String },
  area: { type: String },
  facing: { type: String },
  sides: { type: String },
  tags: [{ type: String }],
  photos: { type: String },
  featured: { type: Boolean, default: false },
  image: { type: String, default: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' },
}, { timestamps: true, strict: false });

module.exports = mongoose.model('Property', propertySchema);
