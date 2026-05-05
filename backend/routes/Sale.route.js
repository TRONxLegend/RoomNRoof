import express from 'express';
import Sale from '../models/Sale.js';
import { SalePropertyEmail } from '../services/emailService.js';

const router = express.Router();

// Toast helper for backend notifications
const toast = {
  info: (msg) => console.log(`ℹ️  [INFO] ${new Date().toLocaleTimeString()} - ${msg}`),
  success: (msg) => console.log(`✅ [SUCCESS] ${new Date().toLocaleTimeString()} - ${msg}`),
  error: (msg) => console.log(`❌ [ERROR] ${new Date().toLocaleTimeString()} - ${msg}`),
  warn: (msg) => console.log(`⚠️  [WARN] ${new Date().toLocaleTimeString()} - ${msg}`)
};

router.post('/sale', async (req, res) => {
  try {
    toast.info('Received new property sale submission');
    
    const saleData = req.body;
    
    // Save to database
    toast.info('Saving property to database...');
    const sale = new Sale(saleData);
    await sale.save();
    toast.success(`Property saved to database with ID: ${sale._id}`);
    
    // Send email with Excel attachment
    toast.info('Preparing to send property email...');
    await SalePropertyEmail(saleData);
    toast.success('Property email sent successfully');
    
    toast.success('Property sale submission completed successfully');
    
    res.status(201).json({
      success: true,
      message: 'Property sale submitted successfully',
      data: sale,
    });
  } catch (error) {
    toast.error(`Error submitting property sale: ${error.message}`);
    console.error('Error submitting property sale:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting property sale',
      error: error.message,
    });
  }
});

export default router;

