import {Meteor} from 'meteor/meteor';

Meteor.publish('getPatientList',function(){
  let user=Meteor.users.find({'profile.role':'patient'});
  let followby=Following.find({followed:this.userId});
  return [user,followby];
});
