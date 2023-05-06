const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Student = new Schema(
    {
        username: { type: String, unique: true },
        email: { type: String, default: '' },
        firstname: { type: String, default: '' },
        lastname: { type: String, default: '' },
        birthday: { type: Date, default: Date.now },
        avatar: {
            character: { type: String, default: 'https://drive.google.com/uc?export=view&id=1wGcR2ACFUCjJyib9CWt_UmXzn5tFjTFN' },
            background: { type: String, default: 'https://drive.google.com/uc?export=view&id=1RgSO2pnGMn6BZpca9HlGn0CDcFAdlbYc' },
        },
        courses: [{
            courseId: { type: Schema.Types.ObjectId },
            courseName: { type: String, default: '' },
            registeredDate: { type: Date, default: Date.now },
            completedDate: { type: Date, default: null },
            progress: { type: Number, default: 0 }, // completed percentage - unit(%)
            result: { type: Number, default: 0 }, // total score combined of all lessons
            lessons: [{
                lessonId: { type: Schema.Types.ObjectId },
                lessonName: { type: String, default: '' },
                score: { type: Number, default: 0 },
            }],
        }],

        // deleteAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    },
);
Student.index({ username: 1 });

// Add plugins
mongoose.plugin(slug);

module.exports = mongoose.model('Student', Student);
