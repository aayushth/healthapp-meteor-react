import Pressure from '../both/collection.js';

Meteor.methods({
  'enterHweightData'(data){
    data.user=this.userId;
    Hweight.insert(data);
  },
});
