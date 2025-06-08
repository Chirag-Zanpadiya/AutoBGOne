# 🖼️ AutoOneBG – Background Remover (MERN Stack)

AutoOneBG is a full-stack web application that allows users to **remove backgrounds from images using AI**. Built using the **MERN stack**, it leverages the power of the **ClipDrop API** for background removal, **Clerk** for secure authentication, and **MongoDB** for data storage.  

🧑‍💻 Perfect for developers, designers, and general users who want quick, clean image edits without hassle.  

---

## 🚀 Features

- 🎨 Upload image and remove background instantly via ClipDrop API
- 👤 Authentication system using Clerk (sign in, sign up, sign out)
- 💳 Credit system:
  - 3 credits for free users
  - Buy more credits via pricing plans
- 📊 MongoDB to store user data, credits, and usage
- 📁 View download history (optional)
- 🌐 Responsive UI using Tailwind CSS
- 🛡️ Protected routes using JWT from Clerk
- ⚙️ Admin/Developer-friendly backend using Node.js & Express

---

## 💸 Pricing Plans

| Plan Name        | Price    | Image Credits         |
|------------------|----------|------------------------|
| **Basic**        | ₹15      | 1 Image                |
| **Standard**     | ₹19      | 2 Images               |
| **Premium**      | ₹49      | 4 Images               |
| **Pro**          | ₹250     | 10 Images              |
| **Unlimited**    | ₹999/mo  | Unlimited Images / mo |

- Credits are stored in the MongoDB backend
- Payments can be integrated with Stripe or Razorpay (as per your implementation)

---

## 🧱 Tech Stack

| Layer        | Technology       |
|--------------|------------------|
| Frontend     | React.js, Tailwind CSS |
| Backend      | Node.js, Express.js    |
| Authentication | Clerk              |
| Database     | MongoDB (Mongoose)     |
| API Used     | ClipDrop Background Removal API |
| State Mgmt   | React Context / Redux (optional) |
| Hosting      | Vercel (frontend), Render/Heroku (backend) |

---

## 📂 Folder Structure

```bash
AutoOneBG/
├── client/               # React frontend
│   ├── components/       # Reusable components
│   ├── pages/            # All route pages
│   ├── context/          # Auth and credit context
│   ├── App.jsx
│   └── main.jsx
├── server/               # Express backend
│   ├── routes/           # API routes
│   ├── controllers/      # Logic and handlers
│   ├── models/           # MongoDB schemas
│   ├── middleware/       # Auth + Error handling
│   └── index.js          # Entry point
├── .env                  # Env variables
└── README.md

🛠️ Setup Instructions
📌 Prerequisites
Node.js ≥ 18

MongoDB Atlas or Local

Clerk account + frontend/public keys

ClipDrop API key

📸 Screenshots

📤 HeroSection :
# Output:
![Screenshot 2025-06-08 104713](https://github.com/user-attachments/assets/973fb3d9-c413-4e69-bedc-6fc44b069ba1)
![Screenshot 2025-06-08 104724](https://github.com/user-attachments/assets/f3fa8fd3-2398-421e-8a40-2907482af212)

🔐 Login with Clerk
![Screenshot 2025-06-08 105529](https://github.com/user-attachments/assets/42aece12-066e-4be5-b496-0698986c4ce3)
![Screenshot 2025-06-08 105540](https://github.com/user-attachments/assets/5c2af01c-2b09-4ac3-a6ab-598378a2b5cc)

📤 Upload Image & Remove Background
![Screenshot 2025-06-08 105752](https://github.com/user-attachments/assets/d80e2b9d-ef0f-4e5a-a1b7-2a5c172ea559)

📥 Download Transparent Image
![Screenshot 2025-06-08 105831](https://github.com/user-attachments/assets/e24668cf-896f-4714-b61d-b34cb01aa214)

💳 Purchase Plan Page
![Screenshot 2025-06-08 110055](https://github.com/user-attachments/assets/ab9aa913-fc89-4b9e-bcbc-b7ceee5d55d1)



📢 Disclaimer
This is an educational MERN Stack project demonstrating:

Full-stack integration
Secure authentication using Clerk
Image processing using an external API
Real-world pricing and credit-based model
