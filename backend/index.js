import express from "express";
import barang from "./models/barangModel.js";
import barang_Route from "./routes/barangRoute.js";

// (async() => {
//     await barang.sync()
// })()

const app = express();

app.use(express.json())

app.use(barang_Route);

app.listen(5000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("server running on port 5000");
    }
});
