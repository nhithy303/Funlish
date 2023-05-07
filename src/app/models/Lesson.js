const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Lesson = new Schema(
    {
        courseId: { type: Schema.Types.ObjectId, ref: 'Course'},
        order: { type: Number },
        name: { type: String, default: '' },
        description: { type: String, default: '' },
        workbook: { type: String, default: '' },
        video: { type: String, default: '' },
        image: { type: String, default: '' },
        quiz: [{ type: Schema.Types.ObjectId, ref: 'Quiz'}],
        slug: { type: String  },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Lesson', Lesson);
