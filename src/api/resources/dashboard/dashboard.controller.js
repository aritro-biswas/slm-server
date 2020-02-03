const DataSet = require('./dashboard.dao');
var asyncLoop = require('node-async-loop');

export default {
   
  async create(req, res) {
    console.log("Controller")
    return res.json({ msg: 'TODO: SONG CREATE' });
  },
  addNewBed: (req, res, next) => {
    var data = req.body;
    // var count = data.length;
    let AddStatus = new Array();
    console.log("addNewBed",req.body)
    asyncLoop(data, function (eachurl, next) {

        DataSet.addNewBed(eachurl).then(status => {
            AddStatus.push(status);
            next();
        });

    }, function () {
        res.json({ result: AddStatus });
        console.log('Finished!');
    });

},
};
