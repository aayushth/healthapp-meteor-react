import {Meteor} from 'meteor/meteor';

Meteor.publish('getPrescriptionData',function(){
  let prescription=Prescription.find({sendTo:this.userId});
  return [prescription];
});
