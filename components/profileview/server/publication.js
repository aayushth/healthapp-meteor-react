import {Meteor} from 'meteor/meteor';

Meteor.publish('getForProfileViewData',function(id){
  let users=Meteor.users.find({_id:id});
  let info=Pupdate.find({user:id},{sort:{created_at:-1},limit:1});
  let pressure=Pressure.find({user:id},{sort:{created_at:-1},limit:1});
  let cholestrol=Cholestrol.find({user:id},{sort:{created_at:-1},limit:1});
  let pulse=Pulse.find({user:id},{sort:{created_at:-1},limit:1});
  let temperature=Temperature.find({user:id},{sort:{created_at:-1},limit:1});
  return [users,info,pressure,cholestrol,pulse,temperature];
});
