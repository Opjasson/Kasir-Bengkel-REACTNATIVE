import express from "express"
import { addTransaksi, getAllTransaksi, getTransaksiByUuid } from "../controllers/transaksiController.js"

const route = express.Router()

route.get("/transaksi", getAllTransaksi)
route.get("/transaksi/:id", getTransaksiByUuid)
route.post("/transaksi", addTransaksi)

export default route;