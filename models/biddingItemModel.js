import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    minimumBid: {
      type: Number,
      required: true,
    },
    currentBid: {
      type: Number,
    },
    biddedBy: {
      type: String,
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    endsAt: {
      type: Date,
      default: Date.now() + 24 * 60 * 60 * 1000,
    },
    isFavourite: {
      type: Boolean,
      required: true,
    },
    createdBy: {
      type: String,
      required: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    bidDetails: {
      type: Array,
      default: []
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

export const biddingItem = mongoose.model("item", itemSchema);
