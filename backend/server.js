import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import rent from './routes/Rent.routes.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import sale from './routes/Sale.route.js';
import interiorRoutes from './routes/Interior.route.js';
import winston from 'winston';
import colors from 'colors';
import dns from 'node:dns';
import connectToDb from './config/config.js';
dotenv.config();

dns.setServers(['1.1.1.1', '8.8.8.8']);
const app = express();
const PORT = process.env.PORT || 5000;

// Custom format for console output with toast-like styling
const toastFormat = winston.format.combine(
  winston.format.timestamp({ format: 'HH:mm:ss' }),
  winston.format.printf(({ timestamp, level, message }) => {
    const icon = {
      error: '❌',
      warn: '⚠️',
      info: 'ℹ️',
      success: '✅'
    }[level] || 'ℹ️';
    
    const colorMap = {
      error: 'red',
      warn: 'yellow',
      info: 'cyan',
      success: 'green'
    };
    
    return `${icon} [${timestamp}] ${colors[colorMap[level] || 'white'](message)}`;
  })
);

// Create logger
const toaster = winston.createLogger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    success: 3
  },
  format: toastFormat,
  transports: [
    new winston.transports.Console()
  ]
});

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  success: 'green'
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/rent', rent);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/sale', sale);
app.use('/api/interior',interiorRoutes);
// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Connect to MongoDB

// mongoose.connect(process.env.MONGODB_URI)
// .then(() => {
//   console.log('Connected to MongoDB');
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// })
// .catch((error) => {
//   console.error('MongoDB connection error:', error);
// });



app.listen(PORT, async () => {
  await connectToDb();
  console.log(`Your server is running on http://localhost:${PORT}`);
});


export default app;

