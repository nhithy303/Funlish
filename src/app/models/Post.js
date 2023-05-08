const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema(
    {
        image: { type: String, default: '' },
        quotes: { type: String, default: '' },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Post', Post);
