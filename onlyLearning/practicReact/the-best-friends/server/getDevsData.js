const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        description: String,
        skype: String,
        discord: String,
        place: String
    },
    { timestamps: false }
);

module.exports = mongoose.model("devs", DataSchema);
