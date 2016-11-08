import {Meteor} from 'meteor/meteor';

Meteor.publish('getImmunizationData',function(){
  return Immunization.find({user:this.userId},{sort:{created_at:-1}});
});

Meteor.publish('getImmunizationDataForChart',function(){
  return Immunization.find({user:this.userId});
});
