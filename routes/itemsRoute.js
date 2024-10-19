import express from "express";
import { biddingItem } from "../models/biddingItemModel.js";

const router = express.Router();
// Add new item
router.post("/", async (req, res) => {
  try {
    if (false) {
      return res.status(400).status({ message: "Send all required fields" });
    }
    const newItem = {
      label: req.body.label,
      minimumBid: req.body.minimumBid,
      updatedAt: Date.now(),
      createdAt: Date.now(),
      endsAt: Date.now() + 24 * 60 * 60 * 1000,
      isFavourite: req.body.isFavourite,
    };
    const item = await biddingItem.create(newItem);
    return res.status(201).send(item);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await biddingItem.find({});
    return res.status(200).json({
      count: items.length,
      data: items,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Get unique item
router.get(`/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const item = await biddingItem.findById(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Update a item
router.put("/:id", async (req, res) => {
  try {
    if (false) {
      return res.status(400).status({ message: "Send all required fields" });
    }
    const { id } = req.params;
    const item = await biddingItem.findByIdAndUpdate(id, req.body);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    return res.status(200).send({ message: "Item updated successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// delete a item
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await biddingItem.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    return res.status(200).send({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
