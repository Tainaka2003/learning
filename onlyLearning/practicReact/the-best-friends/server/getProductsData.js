const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        news: String,
        price: String,
        categories: Array,
        img: String
    },
    { timestamps: false }
);

module.exports = mongoose.model("products", DataSchema);
