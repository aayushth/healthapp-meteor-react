import Temperature from '../both/collection.js';

Meteor.methods({
  'enterTemperatureData'(data){
    data.user=this.userId;
    Temperature.insert(data);
  },
});
