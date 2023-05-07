const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Quiz = new Schema(
    {
        lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson' },
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

module.exports = mongoose.model('Quiz', Quiz);
