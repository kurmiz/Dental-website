import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema);

