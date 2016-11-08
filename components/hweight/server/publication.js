import {Meteor} from 'meteor/meteor';

Meteor.publish('getHweightData',function(){
  return Hweight.find({user:this.userId},{sort:{created_at:-1}});
});

Meteor.publish('getHweightDataForChart',function(){
  return Hweight.find({user:this.userId});
});
