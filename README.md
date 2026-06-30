# QuickBite Delivery

Tech: React · Node.js · Express · MongoDB · JWT · Stripe · Render

Tech: React · Node.js · Express · MongoDB · JWT · Stripe · Render

QuickBite is a full-stack food delivery web app built with the MERN stack.

It includes a customer ordering app, an admin dashboard, an Express backend API, MongoDB storage, JWT authentication, Stripe test checkout, cart management, image uploads, and order tracking.

## Screenshots

Screenshots will be added after deployment.

Planned screenshots:

- Customer home page
- Menu and cart
- Checkout page
- My Orders page
- Admin add food page
- Admin orders page

## Project Structure

```txt
backend/   Express API, MongoDB models, JWT auth, Stripe, image uploads
frontend/  Customer React app
admin/     Admin React dashboard
```

## Features

### Customer App

- Browse food items
- Filter menu by category
- Register and login
- Add and remove cart items
- Place orders
- Pay using Stripe test checkout
- Verify payment
- View order history
- Track order status

### Admin Dashboard

- Admin login
- Add food items with image upload
- View food list
- Remove food items
- View all orders
- Update order status

### Backend

- Express REST API
- MongoDB with Mongoose
- JWT authentication
- Password hashing with bcrypt
- Role-based admin checks
- Multer image uploads
- Stripe Checkout integration
- CORS configuration
- Render deployment blueprint

## Tech Stack

- React
- Vite
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- Stripe
- Axios
- React Toastify
- Render

## Environment Variables

Backend `.env`:

```env
PORT=4000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
SALT=10
STRIPE_SECRET_KEY=your_stripe_test_secret_key
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

Frontend `.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Admin `.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Never commit real `.env` files.

## Run Locally

Backend:

```bash
cd backend
npm install
npm run dev
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Admin:

```bash
cd admin
npm install
npm run dev
```

## API Routes

User:

```txt
POST /api/user/register
POST /api/user/login
```

Food:

```txt
POST /api/food/add
GET  /api/food/list
POST /api/food/remove
```

Cart:

```txt
POST /api/cart/add
POST /api/cart/remove
POST /api/cart/get
```

Order:

```txt
POST /api/order/place
POST /api/order/verify
POST /api/order/status
POST /api/order/userorders
POST /api/order/list
```

## Stripe Test Payment

Use Stripe test mode.

Test card:

```txt
4242 4242 4242 4242
```

Use any future expiry date and any 3 digit CVC.

## Important Fixes Made

- Moved project files to repository root
- Replaced hardcoded admin backend URL with environment variable
- Changed admin order list API from GET to POST
- Fixed order timestamp default
- Improved backend CORS configuration
- Improved MongoDB connection handling
- Improved frontend cart state handling
- Added try/catch around frontend API calls
- Fixed frontend and admin Vite config files
- Updated Render blueprint configuration

## Deployment

This project includes `render.yaml` for Render deployment.

It defines:

```txt
quickbite-backend
quickbite-frontend
quickbite-admin
```

Set environment variables in Render before deploying.

## Limitations

- Uploaded images are stored locally in the backend uploads folder
- Render free services may sleep after inactivity
- Stripe is configured for test mode
- Admin role must currently be assigned manually in MongoDB
- Automated tests are not added yet

## Future Improvements

- Add backend tests
- Add GitHub Actions CI
- Add Cloudinary for image storage
- Add forgot password flow
- Add screenshots and demo GIF
- Add admin analytics dashboard

## License

MIT
