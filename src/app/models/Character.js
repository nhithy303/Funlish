const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Character = new Schema(
    {
        name: { type: String },
        image: { type: String },
    },
);

module.exports = mongoose.model('Character', Character);
