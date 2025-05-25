import cartModel from "../models/cartModel";
import transaksiModel from "../models/transaksiModel.js";

export const addTransaksi = async (req, res) => {
    try {
        await transaksiModel.create();
        res.status(200).json({ msg: "transaksi berhasil dibuat" });
    } catch (error) {
        req.status(400).json({ msg: error.message });
    }
};

export const getAllTransaksi = async (req, res) => {
    try {
        const response = await transaksiModel.findAll({
            attributes: ["uuid"],
            include: [
                {
                    model: cartModel,
                    attributes: ["barangId", "transaksiId", "qty"],
                },
            ],
        });
        res.status(200).json({ response });
    } catch (error) {}
};
