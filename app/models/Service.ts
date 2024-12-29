import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'Service duration is required'],
    min: [1, 'Duration must be at least 1 minute'],
  },
  price: {
    type: Number,
    required: [true, 'Service price is required'],
    min: [0, 'Price cannot be negative'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);

export default Service;

