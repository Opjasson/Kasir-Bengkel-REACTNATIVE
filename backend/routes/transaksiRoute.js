import express from "express"
import { addTransaksi, getAllTransaksi, getTransaksiByUuid, updateTransaksi } from "../controllers/transaksiController.js"

const route = express.Router()

route.get("/transaksi", getAllTransaksi)
route.get("/transaksi/:id", getTransaksiByUuid)
route.post("/transaksi", addTransaksi)
route.patch("/transaksi/:id", updateTransaksi)

export default route;