import {Meteor} from 'meteor/meteor';

Meteor.publish('getDoctorList',function(){
  let user=Meteor.users.find({'profile.role':'doctor'});
  let follow=Following.find({followby:this.userId});
  return [user,follow];
});
