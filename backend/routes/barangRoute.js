import express from "express";
import { createBarang, getBarang, getBarangById } from "../controllers/barangController.js";

const route = express.Router();

route.get("/barang", getBarang);
route.get("/barang/:id", getBarangById);
route.post("/barang", createBarang);

export default route;
