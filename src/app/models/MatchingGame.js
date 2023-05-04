const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchingGame = new Schema(
    {
        topic: { type: String },
        cards: [{
            word: { type: String },
            picture: { type: String },
            display: { type: String },
        }],
    },
    // {
    //     timestamps: true,
    // },
);

module.exports = mongoose.model('MatchingGame', MatchingGame);
