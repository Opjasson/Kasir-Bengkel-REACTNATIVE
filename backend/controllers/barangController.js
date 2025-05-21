import { Sequelize } from "sequelize";
import barang from "../models/barangModel.js";


export const createBarang = async (req, res) => {
    const { nama, harga, stok } = req.body;

    try {
        await barang.create({
            nama,
            harga,
            stok,
        });
        res.status(200).json({ msg: "Barang berhasil ditambahkan1" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};


export const getBarang = async (req, res) => {
    try {
        const response = await barang.findAll({
            attributes: ["id","nama","harga","stok"]
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
}