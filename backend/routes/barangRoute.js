import express from "express";
import { createBarang, getBarang } from "../controllers/barangController.js";

const route = express.Router();

route.get("/barang", getBarang);
route.post("/barang", createBarang);

export default route;
