import {Meteor} from 'meteor/meteor';

Meteor.publish('getLoginData',function(id){
  return Meteor.users.find({_id:this.userId});
});

Meteor.publish('getDoctorProfileData',function(){
  let appointment=Appointment.find({sendTo:this.userId});
  let info=Dupdate.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let users=Meteor.users.find({_id:this.userId});
  return [appointment,info,users];
});

Meteor.publish('getSummaryData',function(){
  let pressure=Pressure.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let immunization=Immunization.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let cholestrol=Cholestrol.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let hweight=Hweight.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let temperature=Temperature.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let pulse=Pulse.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let miscellanous=Miscellanous.find({user:this.userId},{sort:{created_at:-1},limit:1});
  return [pressure,immunization,cholestrol,hweight,temperature,pulse,miscellanous];
});
