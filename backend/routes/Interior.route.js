import express from 'express';
import Interior from '../models/Interior.js';
import { sendInteriorEmail } from '../services/emailService.js';
const router = express.Router();

const toast = {
  info: (msg) => console.log(`ℹ️  [INFO] ${new Date().toLocaleTimeString()} - ${msg}`),
  success: (msg) => console.log(`✅ [SUCCESS] ${new Date().toLocaleTimeString()} - ${msg}`),
  error: (msg) => console.log(`❌ [ERROR] ${new Date().toLocaleTimeString()} - ${msg}`),
  warn: (msg) => console.log(`⚠️  [WARN] ${new Date().toLocaleTimeString()} - ${msg}`)
};

router.post('/interior',async(req,res)=>{
try{
    toast.info('Received new interior design enquiry');
    
    const interiorData=req.body;    
    toast.info('Saving interior enquiry to database...');
    const interior=new Interior(interiorData);
    await interior.save();
    toast.info('Preparing to send interior enquiry email...');
    await sendInteriorEmail(interiorData);
    res.status(201).json({
        success:true,
        message:'Interior enquiry submitted successfully',
        data:interior,
    });
}catch(error){
    console.error('Error submitting interior enquiry:',error);
    res.status(500).json({
        success:false,
        message:'Error submitting interior enquiry',
        error:error.message,
    });
}
})

export default router;