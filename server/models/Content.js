// models/Content.js
// Content database model

const contentSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  }, { timestamps: true });
  
  const Content = mongoose.model('Content', contentSchema);
  module.exports = Content;
  