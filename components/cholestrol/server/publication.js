import {Meteor} from 'meteor/meteor';

Meteor.publish('getCholestrolData',function(){
  return Cholestrol.find({user:this.userId},{sort:{created_at:-1}});
});

Meteor.publish('getCholestrolDataForChart',function(){
  return Cholestrol.find({user:this.userId});
});
