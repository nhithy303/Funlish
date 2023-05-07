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
    }
);

module.exports = mongoose.model('MatchingGame', MatchingGame);
