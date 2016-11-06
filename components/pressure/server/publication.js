import {Meteor} from 'meteor/meteor';

Meteor.publish('getPressureData',function(){
  return Pressure.find({user:this.userId},{sort:{created_at:-1}});
});
