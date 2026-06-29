import userModel from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
const userId = req.body.userId;
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }
    const itemId = req.body.itemId;
    userData.cartData[itemId] = (userData.cartData[itemId] || 0) + 1;
    await userData.save();
    res.json({ success: true, cartData: userData.cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
const userId = req.body.userId;
    const userData = await userModel.findById(userId);
    if (!userData || !userData.cartData[req.body.itemId]) {
      return res.json({ success: false, message: "Item not in cart" });
    }
    userData.cartData[req.body.itemId] -= 1;
    if (userData.cartData[req.body.itemId] === 0) {
      delete userData.cartData[req.body.itemId];
    }
    await userData.save();
    res.json({ success: true, cartData: userData.cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export const getCart = async (req, res) => {
  try {
const userId = req.body.userId;
    const userData = await userModel.findById(userId);
    res.json({ success: true, cartData: userData ? userData.cartData : {} });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};