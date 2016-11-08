import {Meteor} from 'meteor/meteor';

Meteor.publish('getPulseData',function(){
  return Pulse.find({user:this.userId},{sort:{created_at:-1}});
});

Meteor.publish('getPulseDataForChart',function(){
  return Pulse.find({user:this.userId});
});
