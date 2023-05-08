const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QnA = new Schema(
    {
        name: { type: String, default: '' },
        email: { type: String, default: '' },
        question: { type: String, default: '' },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('QnA', QnA);
