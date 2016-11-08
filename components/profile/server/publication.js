import {Meteor} from 'meteor/meteor';

Meteor.publish('getProfileData',function(id){
  let user=Meteor.users.find({_id:this.userId});
  let pressure=Pressure.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let cholestrol=Cholestrol.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let temperature=Temperature.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let pulse=Pulse.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let hweight=Hweight.find({user:this.userId},{sort:{created_at:-1},limit:1});
  return [user,pressure,cholestrol,temperature,pulse,hweight];
});
