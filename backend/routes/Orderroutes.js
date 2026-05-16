import express from 'express'
import Order from '../models/Order.js'

const router = express.Router();

// purchase
router.post('/purchase', async (req, res) => {
  try {
    const { productName, productId, name, address, number } = req.body;

    await Order.create({
      productName,
      productId,
      name,
      number,
      address,
    });

    res.json({ msg: "Order Success" });

  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;