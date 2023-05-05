const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String },
        image: { type: String },
        icon: { type: String },
        detail: { type: String },
        lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson'}],
        // students: [{ type: Schema.Types.ObjectId, ref: 'Student'}],
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);
