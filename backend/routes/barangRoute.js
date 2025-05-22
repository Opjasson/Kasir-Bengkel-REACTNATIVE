import express from "express";
import { createBarang, deleteBarangById, getBarang, getBarangById } from "../controllers/barangController.js";

const route = express.Router();

route.get("/barang", getBarang);
route.get("/barang/:id", getBarangById);
route.post("/barang", createBarang);
route.delete("/barang/:id", deleteBarangById);

export default route;
