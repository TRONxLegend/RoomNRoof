import express from 'express';
import Enquiry from '../models/Enquiry.js';
import { sendEnquiryEmail } from '../services/emailService.js';

const router = express.Router();

// Toast helper for backend notifications
const toast = {
  info: (msg) => console.log(`ℹ️  [INFO] ${new Date().toLocaleTimeString()} - ${msg}`),
  success: (msg) => console.log(`✅ [SUCCESS] ${new Date().toLocaleTimeString()} - ${msg}`),
  error: (msg) => console.log(`❌ [ERROR] ${new Date().toLocaleTimeString()} - ${msg}`),
  warn: (msg) => console.log(`⚠️  [WARN] ${new Date().toLocaleTimeString()} - ${msg}`)
};

router.post('/book', async (req, res) => {
  try {
    toast.info('Received new booking enquiry');
    
    const enquiryData = req.body;
    
    // Save to database
    toast.info('Saving enquiry to database...');
    const enquiry = new Enquiry(enquiryData);
    await enquiry.save();    
    // Send email with Excel attachment
    toast.info('Preparing to send enquiry email...');
    await sendEnquiryEmail(enquiryData);
    
    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: enquiry,
    });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting enquiry',
      error: error.message,
    });
  }
});

export default router;

