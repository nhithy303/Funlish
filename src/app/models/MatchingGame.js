const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const MatchingGameCard = new Schema(
//     {
//         word: { type: String },
//         picture: { type: String },
//         type: { type: String },
//     },
//     {
//         timestamps: true,
//     },
// );

const MatchingGame = new Schema(
    {
        topic: { type: String },
        // cards: [MatchingGameCard],
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
