import {Meteor} from 'meteor/meteor';

Meteor.publish('getLoginData',function(id){
  return Meteor.users.find({_id:this.userId});
});
