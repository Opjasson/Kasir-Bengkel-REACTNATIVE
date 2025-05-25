import express from "express"
import { addTransaksi, getAllTransaksi } from "../controllers/transaksiController.js"

const route = express.Router()

route.get("/transaksi", getAllTransaksi)
route.post("/transaksi", addTransaksi)

export default route;