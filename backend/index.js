import express from "express";
import barang from "./models/barangModel.js";
import barang_Route from "./routes/barangRoute.js";
import dotenv from "dotenv";

// (async() => {
//     await barang.sync()
// })()

dotenv.config();
const app = express();

app.use(express.json());

app.use(barang_Route);

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`server running on http://localhost:${process.env.PORT}`);
    }
});
