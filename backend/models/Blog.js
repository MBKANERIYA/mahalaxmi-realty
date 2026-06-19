const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  excerpt: { type: String, required: true },
  author: { type: String, default: 'Mahalaxmi Realty' },
  date: { type: String },
  category: { type: String, default: 'Real Estate' },
  readTime: { type: String, default: '5 min read' },
  content: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
