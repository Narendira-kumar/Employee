var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Employee = new Schema({
  employeeName: {
    type: String
  },
  employeeId: {
    type: Number
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);