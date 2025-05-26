import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

// Public Routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Admin Route
router.post("/", protect, admin, createProduct);

export default router;
