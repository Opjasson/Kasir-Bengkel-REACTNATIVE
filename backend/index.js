import express from "express";
import barang from "./models/barangModel.js";
import barang_Route from "./routes/barangRoute.js";
import transaksi_Route from "./routes/transaksiRoute.js"
import cart_Route from "./routes/cartRoute.js"
import dotenv from "dotenv";
import cors from "cors"
import cartModel from "./models/cartModel.js";
import transaksiModel from "./models/transaksiModel.js";
import user from "./models/user.js";


// (async() => {
//     await user.sync()
// })()

dotenv.config();
const app = express();

app.use(cors())
app.use(express.json());

app.use(barang_Route);
app.use(transaksi_Route)
app.use(cart_Route)

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`server running on http://localhost:${process.env.PORT}`);
    }
});
