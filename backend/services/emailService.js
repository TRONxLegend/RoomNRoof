import nodemailer from 'nodemailer';
import XLSX from 'xlsx';
import dotenv from 'dotenv';

dotenv.config();

// Toast helper for backend notifications
const toast = {
  info: (msg) => console.log(`ℹ️  [INFO] ${new Date().toLocaleTimeString()} - ${msg}`),
  success: (msg) => console.log(`✅ [SUCCESS] ${new Date().toLocaleTimeString()} - ${msg}`),
  error: (msg) => console.log(`❌ [ERROR] ${new Date().toLocaleTimeString()} - ${msg}`),
  warn: (msg) => console.log(`⚠️  [WARN] ${new Date().toLocaleTimeString()} - ${msg}`)
};

// Resend SMTP transport (replaces Gmail SMTP — works on all free hosting tiers)
const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true,
  auth: {
    user: 'resend',               // always literally the string "resend"
    pass: process.env.RESEND_API_KEY,
  },
});

export const sendPropertyEmail = async (propertyData) => {
  try {
    toast.info('Starting property email service...');

    // Create Excel workbook
    toast.info('Creating Excel workbook for property data...');
    const workbook = XLSX.utils.book_new();
    const worksheetData = [
      ['Name', propertyData.name],
      ['Email', propertyData.email],
      ['Phone', propertyData.phone],
      ['Property Type', propertyData.propertyType],
      ['Bhk', propertyData.bhk],
      ['Address', propertyData.address],
      ['City', propertyData.city],
      ['State', propertyData.state],
      ['Area', propertyData.area],
      ['Rent Amount', propertyData.rentAmount],
      ['Description', propertyData.description || ''],
      ['Submitted At', new Date().toLocaleString()],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Property Details');

    // Generate Excel buffer
    toast.info('Generating Excel file buffer...');
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Email options
    toast.info('Preparing email with attachment...');
    const mailOptions = {
      from: process.env.EMAIL_FROM,   // e.g. "Room & Roof <noreply@yourdomain.com>"
      to: 'roomnroof02@gmail.com',
      subject: 'New Property Listing - Room & Roof Reality',
      text: `A new property has been submitted for rent.\n\nName: ${propertyData.name}\nEmail: ${propertyData.email}\nPhone: ${propertyData.phone}\nProperty Type: ${propertyData.propertyType}\nAddress: ${propertyData.address}\nCity: ${propertyData.city}\nState: ${propertyData.state}\nBHK: ${propertyData.bhk}\nArea: ${propertyData.area}\nRent Amount: ${propertyData.rentAmount}`,
      html: `
        <h2>New Property Listing</h2>
        <p>A new property has been submitted for rent.</p>
        <table border="1" cellpadding="10" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${propertyData.name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${propertyData.email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${propertyData.phone}</td></tr>
          <tr><td><strong>Property Type</strong></td><td>${propertyData.propertyType}</td></tr>
          <tr><td><strong>Address</strong></td><td>${propertyData.address}</td></tr>
          <tr><td><strong>City</strong></td><td>${propertyData.city}</td></tr>
          <tr><td><strong>State</strong></td><td>${propertyData.state}</td></tr>
          <tr><td><strong>BHK</strong></td><td>${propertyData.bhk}</td></tr>
          <tr><td><strong>Area</strong></td><td>${propertyData.area}</td></tr>
          <tr><td><strong>Rent Amount</strong></td><td>${propertyData.rentAmount}</td></tr>
          <tr><td><strong>Description</strong></td><td>${propertyData.description || 'N/A'}</td></tr>
        </table>
      `,
      attachments: [
        {
          filename: `property_${Date.now()}.xlsx`,
          content: excelBuffer,
        },
      ],
    };

    toast.info('Sending email via Resend SMTP...');
    await transporter.sendMail(mailOptions);
    toast.success('Property email sent successfully');
  } catch (error) {
    toast.error(`Error sending property email: ${error.message}`);
    throw error;
  }
};

export const SalePropertyEmail = async (saleData) => {
  try {
    toast.info('Starting property sale email service...');

    // Create Excel workbook
    toast.info('Creating Excel workbook for property sale data...');
    const workbook = XLSX.utils.book_new();
    const worksheetData = [
      ['Name', saleData.name],
      ['Email', saleData.email],
      ['Phone', saleData.phone],
      ['Property Type', saleData.propertyType],
      ['Bhk', saleData.bhk],
      ['Address', saleData.address],
      ['City', saleData.city],
      ['State', saleData.state],
      ['Area', saleData.area],
      ['Sale Amount', saleData.saleAmount],
      ['Description', saleData.description || ''],
      ['Submitted At', new Date().toLocaleString()],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Property Sale Details');

    // Generate Excel buffer
    toast.info('Generating Excel file buffer...');
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Email options
    toast.info('Preparing email with attachment...');
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: 'roomnroof02@gmail.com',
      subject: 'New Property Sale - Room & Roof Reality',
      text: `A new property has been submitted for sale.\n\nName: ${saleData.name}\nEmail: ${saleData.email}\nPhone: ${saleData.phone}\nProperty Type: ${saleData.propertyType}\nAddress: ${saleData.address}\nCity: ${saleData.city}\nState: ${saleData.state}\nBHK: ${saleData.bhk}\nArea: ${saleData.area}\nSale Amount: ${saleData.saleAmount}`,
      html: `
        <h2>New Property Sale</h2>
        <p>A new property has been submitted for sale.</p>
        <table border="1" cellpadding="10" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${saleData.name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${saleData.email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${saleData.phone}</td></tr>
          <tr><td><strong>Property Type</strong></td><td>${saleData.propertyType}</td></tr>
          <tr><td><strong>Address</strong></td><td>${saleData.address}</td></tr>
          <tr><td><strong>City</strong></td><td>${saleData.city}</td></tr>
          <tr><td><strong>State</strong></td><td>${saleData.state}</td></tr>
          <tr><td><strong>BHK</strong></td><td>${saleData.bhk}</td></tr>
          <tr><td><strong>Area</strong></td><td>${saleData.area}</td></tr>
          <tr><td><strong>Sale Amount</strong></td><td>${saleData.saleAmount}</td></tr>
          <tr><td><strong>Description</strong></td><td>${saleData.description || 'N/A'}</td></tr>
        </table>
      `,
      attachments: [
        {
          filename: `sale_${Date.now()}.xlsx`,
          content: excelBuffer,
        },
      ],
    };

    toast.info('Sending email via Resend SMTP...');
    await transporter.sendMail(mailOptions);
    toast.success('Property sale email sent successfully');
  } catch (error) {
    toast.error(`Error sending property sale email: ${error.message}`);
    throw error;
  }
};

export const sendEnquiryEmail = async (enquiryData) => {
  try {
    toast.info('Starting enquiry email service...');

    // Create Excel workbook
    toast.info('Creating Excel workbook for enquiry data...');
    const workbook = XLSX.utils.book_new();
    const worksheetData = [
      ['Name', enquiryData.name],
      ['Email', enquiryData.email],
      ['Phone', enquiryData.phone],
      ['Property Type', enquiryData.propertyType],
      ['Budget', enquiryData.budget],
      ['Location', enquiryData.location],
      ['Message', enquiryData.message || ''],
      ['Submitted At', new Date().toLocaleString()],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Enquiry Details');

    // Generate Excel buffer
    toast.info('Generating Excel file buffer...');
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Email options
    toast.info('Preparing email with attachment...');
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: 'roomnroof02@gmail.com',
      subject: 'New Property Enquiry - Room & Roof Reality',
      text: `A new property enquiry has been received.\n\nName: ${enquiryData.name}\nEmail: ${enquiryData.email}\nPhone: ${enquiryData.phone}\nProperty Type: ${enquiryData.propertyType}\nBudget: ${enquiryData.budget}\nLocation: ${enquiryData.location}\nMessage: ${enquiryData.message || 'N/A'}`,
      html: `
        <h2>New Property Enquiry</h2>
        <p>A new property enquiry has been received.</p>
        <table border="1" cellpadding="10" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${enquiryData.name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${enquiryData.email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${enquiryData.phone}</td></tr>
          <tr><td><strong>Property Type</strong></td><td>${enquiryData.propertyType}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${enquiryData.budget}</td></tr>
          <tr><td><strong>Location</strong></td><td>${enquiryData.location}</td></tr>
          <tr><td><strong>Message</strong></td><td>${enquiryData.message || 'N/A'}</td></tr>
        </table>
      `,
      attachments: [
        {
          filename: `enquiry_${Date.now()}.xlsx`,
          content: excelBuffer,
        },
      ],
    };

    toast.info('Sending email via Resend SMTP...');
    await transporter.sendMail(mailOptions);
    toast.success('Enquiry email sent successfully');
  } catch (error) {
    toast.error(`Error sending enquiry email: ${error.message}`);
    throw error;
  }
};

export const sendInteriorEmail = async (interiorData) => {
  try {
    toast.info('Starting interior email service...');

    // Create Excel workbook
    toast.info('Creating Excel workbook for interior data...');
    const workbook = XLSX.utils.book_new();
    const worksheetData = [
      ['Name', interiorData.name],
      ['Email', interiorData.email],
      ['Phone', interiorData.phone],
      ['Room Type', interiorData.roomType],
      ['Budget', interiorData.budget],
      ['Style', interiorData.style],
      ['Message', interiorData.message || ''],
      ['Submitted At', new Date().toLocaleString()],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Interior Details');

    // Generate Excel buffer
    toast.info('Generating Excel file buffer...');
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Email options
    toast.info('Preparing email with attachment...');
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: 'roomnroof02@gmail.com',
      subject: 'New Interior Design Request - Room & Roof Reality',
      text: `A new interior design request has been received.\n\nName: ${interiorData.name}\nEmail: ${interiorData.email}\nPhone: ${interiorData.phone}\nRoom Type: ${interiorData.roomType}\nStyle: ${interiorData.style}\nBudget: ${interiorData.budget}\nMessage: ${interiorData.message || 'N/A'}`,
      html: `
        <h2>New Interior Design Request</h2>
        <p>A new interior design request has been received.</p>
        <table border="1" cellpadding="10" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${interiorData.name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${interiorData.email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${interiorData.phone}</td></tr>
          <tr><td><strong>Room Type</strong></td><td>${interiorData.roomType}</td></tr>
          <tr><td><strong>Style</strong></td><td>${interiorData.style}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${interiorData.budget}</td></tr>
          <tr><td><strong>Message</strong></td><td>${interiorData.message || 'N/A'}</td></tr>
        </table>
      `,
      attachments: [
        {
          filename: `interior_${Date.now()}.xlsx`,
          content: excelBuffer,
        },
      ],
    };

    toast.info('Sending email via Resend SMTP...');
    await transporter.sendMail(mailOptions);
    toast.success('Interior design email sent successfully');
  } catch (error) {
    toast.error(`Error sending interior design email: ${error.message}`);
    throw error;
  }
};