import Pulse from '../both/collection.js';

Meteor.methods({
  'enterPulseData'(data){
    data.user=this.userId;
    Pulse.insert(data);
  },
});
