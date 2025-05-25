import cartModel from "../models/cartModel.js";

export const addCart = async (req, res) => {
    try {
        const { qty, barangId, transaksiId } = req.body;

        await cartModel.create({
            qty,
            barangId,
            transaksiId,
        });
        req.status(200).json({ msg: "Data berhasil dibuat!" });
    } catch (error) {
        console.log(error.message);
    }
};


