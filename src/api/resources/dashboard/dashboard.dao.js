import dashSchema from './dashboard.model'

var DashOps = module.exports = {
    addNewBed: (data) => {
        let newBedData = new dashSchema(data);
        return newBedData.save().then(result => {
            return result;
        })   
    }
}