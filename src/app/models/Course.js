const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, default: '' },
        image: { type: String, default: '' },
        icon: { type: String, default: '' },
        description: { type: String, default: '' },
        lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson'}],
        slug: { type: String, unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
