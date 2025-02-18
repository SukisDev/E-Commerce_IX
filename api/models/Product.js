const { default: mongoose } = require('mongoose')
const moogoose = require('mongoose')

const reviewSchema = moogoose.Schema({
    name: { type : String, required : true},
    rating: { type : String, required : true},
    comment: { type : String, required : true},
    user: { type : mongoose.Schema.Types.ObjectId, required: true, ref:"User"}
})

const prodcutSchema = mongoose.Schema(
    {
        name: { type : String, required : true},
        image: { type : String, required : true},
        description: { type : String, required : true},
        rating: { type : Number, required : true, default: 0},
        numReview: { type : Number, required : true, default: 0},
        price: { type : Number, required : true, default: 0},
        countInStock: { type : Number, required : true, default: 0},

        reviews : [reviewSchema],
    }
)

module.exports = moogoose.model("produc", prodcutSchema)