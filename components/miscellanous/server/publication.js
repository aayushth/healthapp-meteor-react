import {Meteor} from 'meteor/meteor';

Meteor.publish('getMiscellanousData',function(){
  return Miscellanous.find({user:this.userId},{sort:{created_at:-1}});
});

Meteor.publish('getMiscellanousDataForChart',function(){
  return Miscellanous.find({user:this.userId});
});
