import Miscellanous from '../both/collection.js';

Meteor.methods({
  'enterMiscellanousData'(data){
    data.user=this.userId;
    Miscellanous.insert(data);
  },
});
