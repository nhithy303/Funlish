const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Quiz = new Schema(
    {
        order: { type: Number },
        question: { type: String, default: '' },
        answer: { type: Number },
        option: [{
            order: { type: Number },
            content: { type: String, default: '' },
        }],
    },
    {
        timestamps: true,
    },
);

// Add plugins
// mongoose.plugin(slug);

module.exports = mongoose.model('Quiz', Quiz);
