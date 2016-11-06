import Pressure from '../both/collection.js';

Meteor.methods({
  'enterPressureData'(data){
    data.user=this.userId;
    Pressure.insert(data);
  },
});
