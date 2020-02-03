import mongoose from 'mongoose';
mongoose.set('useUnifiedTopology', true);
const environment = 'development';
const configs = require('./state/' + environment + '.json');
mongoose.Promise = global.Promise;

export const connect = () => mongoose.connect(configs.database, { useNewUrlParser: true },(error)=>{
    if (!error){
        console.log("Success");
    }
    else{
        console.log("Error connecting to Database")
    }
});