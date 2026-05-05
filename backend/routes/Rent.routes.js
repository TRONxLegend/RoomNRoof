import express from 'express';
import Property from '../models/Property.js';
import { sendPropertyEmail } from '../services/emailService.js';

const router = express.Router();

// Toast helper for backend notifications
const toast = {
  info: (msg) => console.log(`ℹ️  [INFO] ${new Date().toLocaleTimeString()} - ${msg}`),
  success: (msg) => console.log(`✅ [SUCCESS] ${new Date().toLocaleTimeString()} - ${msg}`),
  error: (msg) => console.log(`❌ [ERROR] ${new Date().toLocaleTimeString()} - ${msg}`),
  warn: (msg) => console.log(`⚠️  [WARN] ${new Date().toLocaleTimeString()} - ${msg}`)
};

router.post('/rent', async (req, res) => {
  try {
    toast.info('Received new property rental submission');
    
    const propertyData = req.body;
    
    // Save to database
    toast.info('Saving property to database...');
    const property = new Property(propertyData);
    await property.save();
    toast.success(`Property saved to database with ID: ${property._id}`);
    
    // Send email with Excel attachment
    toast.info('Preparing to send property email...');
    await sendPropertyEmail(propertyData);
    toast.success('Property email sent successfully');
    
    toast.success('Property submission completed successfully');
    
    res.status(201).json({
      success: true,
      message: 'Property submitted successfully',
      data: property,
    });
  } catch (error) {
    toast.error(`Error submitting property: ${error.message}`);
    console.error('Error submitting property:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting property',
      error: error.message,
    });
  }
});

export default router;

