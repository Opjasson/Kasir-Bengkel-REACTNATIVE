import db from "../config/database.js";

import { INTEGER, Sequelize, STRING } from "sequelize";

const barang = db.define("barang", {
    nama : {
        type : STRING,
        allowNull : false,
        validate: {
            notEmpty: true,
        }
    },
    harga : {
        type : INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    stok : {
        type : INTEGER,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    }
});

export default barang;