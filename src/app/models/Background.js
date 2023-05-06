const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Background = new Schema(
    {
        name: { type: String, default: '' },
        image: { type: String, default: '' },
    },
);

module.exports = mongoose.model('Background', Background);
