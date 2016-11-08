import Immunization from '../both/collection.js';

Meteor.methods({
  'enterImmunizationData'(data){
    data.user=this.userId;
    Immunization.insert(data);
  },
});
