# Fix Everything - Progress Tracker

## Backend Fixes ✅
- [x] Created backend/.env (fill placeholders: MongoDB password, Stripe key, JWT_SECRET)
- [x] Implemented real cart logic in cartController.js (uses userModel.cartData, persists to DB)
- [x] Fixed userModel.js Mongoose model registration
- [ ] Fill backend/.env secrets
- [ ] Run `run-backend.bat` - expect "Server Started" and "DB Connected" (no errors)

Next:
## Dev Setup Fixes
- [ ] Add proxy to frontend/admin vite.config.js for /api -> localhost:4000
- [ ] Run run-frontend.bat and run-admin.bat

## Test
- Register/login, add to cart (check console/network for cartData response)
- Place order (Stripe test)

Run this command to test backend:
run-backend.bat
