import express from "express"
import { createBarang } from "../controllers/barangController.js"

const route = express.Router()

route.post("/barang",createBarang)

export default route;