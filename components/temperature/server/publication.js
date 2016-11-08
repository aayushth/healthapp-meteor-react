import {Meteor} from 'meteor/meteor';

Meteor.publish('getTemperatureData',function(){
  return Temperature.find({user:this.userId},{sort:{created_at:-1}});
});

Meteor.publish('getTemperatureDataForChart',function(){
  return Temperature.find({user:this.userId});
});
