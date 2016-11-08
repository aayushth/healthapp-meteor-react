import {Meteor} from 'meteor/meteor';

Meteor.publish('getPressureData',function(){
  return Pressure.find({user:this.userId},{sort:{created_at:-1}});
});

Meteor.publish('getPressureDataForChart',function(){
  return Pressure.find({user:this.userId});
});
