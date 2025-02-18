const moogoose = required("moongoose");
// const bcrypt = required("bcryptjs");

const userSchema = new moogoose.Schema({
    name: { type : String, required : true},
    email: { type : String, required : true, unique: true},
    password: { type : String, required : true},
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{ timestamps: true}
);

module.exports = moogoose.model("User", userSchema)