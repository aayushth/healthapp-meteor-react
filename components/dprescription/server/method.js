import Prescription from '../both/collection.js';

Meteor.methods({
  'enterPrescriptionData'(data){
    data.user=this.userId;
    return Prescription.insert(data);
  },
});
