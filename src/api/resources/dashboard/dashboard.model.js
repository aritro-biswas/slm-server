import mongoose from 'mongoose';

const {Schema} = mongoose;
const dashSchema = new Schema({
        wifiMac: {
            type: String,
            // required: true
        },
        salineLevel: {
            type: Number,
            // required: true
        },
        bedNo: {
            type: Number,
            // required: true
        },
        wardNo: {
            type: Number,
            // required: true
        },
        floorNo: {
            type: Number,
            // required: true
        }
});

export default mongoose.model('Dashboard',dashSchema);