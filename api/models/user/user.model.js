const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require ("bcrypt");

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
                   
        },
        password : {
            type: String,
            required: [true, 'Password is required']
        }
    },
    {
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                delete ret.password;
                return ret;
            },
        },
    
    },
);

userSchema.pre("save", function(next) {
    if(this.isModified("password")){
        bcrypt.hash(this.password, 10)
            .then((hash) => {
                this.password = hash;
                next();
            })
            .catch(next)
    } else {
        next()
    }
});

userSchema.method("checkPassword", function (password) {
    console.log(`comparing ${password} ${this.password}`)
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);
module.exports = User;