# Room & Roof Reality - Real Estate Portfolio Website

A modern real estate portfolio website built with React, Vite, Tailwind CSS, and the MERN stack.

## Features

- **Rent Your Property**: Property owners can submit their property details through a comprehensive form
- **Book an Enquiry**: Potential tenants can submit enquiries for properties
- **About Page**: Learn more about Room & Roof Reality
- **Email Notifications**: Form submissions are automatically sent via email with Excel attachments
- **Modern UI**: Beautiful light green and white theme

## Tech Stack

- **Frontend**: React + Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Email Service**: Nodemailer
- **Excel Generation**: XLSX

## Project Structure

```
Room & Roof Reality/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
├── backend/           # Express backend
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Gmail account for email service (or any SMTP service)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```


4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
## License

MIT

