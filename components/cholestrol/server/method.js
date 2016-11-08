import Cholestrol from '../both/collection.js';

Meteor.methods({
  'enterCholestrolData'(data){
    data.user=this.userId;
    Cholestrol.insert(data);
  },
});
