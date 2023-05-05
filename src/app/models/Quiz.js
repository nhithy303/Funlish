const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Quiz = new Schema(
    {
        question: { type: String },
        answer: { type: Number },
        option: [{
            order: { type: Number },
            content: { type: String },
        }],
    },
    {
        timestamps: true,
    },
);

// Add plugins
// mongoose.plugin(slug);

module.exports = mongoose.model('Quiz', Quiz);
