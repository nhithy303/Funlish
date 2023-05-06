const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: { type: String, unique: true },
        password: { type: String },
        singinAt: { type: Date, default: Date.now },
        singoutAt: { type: Date, default: Date.now },
    },
    // {
    //     timestamps: true,
    // },
);

// Hash password before save into database
User.pre("save", function (next) {
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, (saltError, salt) => {
            if (saltError) {
                return next(err);
            }
            bcrypt.hash(this.password, salt, (hashError, hash) => {
                if (hashError) {
                    return next(hashError);
                }
                this.password = hash;
                next();
            });
        });
    }
    else {
        return next();
    }
});

// Validate password
User.methods.validatePassword = function (password, callback) {
    bcrypt.compare(password, this.password, (err, match) => {
        if (err) {
            return callback(err);
        }
        else {
            callback(null, match);
        }
    });
}

// Add plugins
mongoose.plugin(slug);

module.exports = mongoose.model('User', User);
